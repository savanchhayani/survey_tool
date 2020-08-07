import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Survey } from 'src/interfaces/Survey.interface';
import SurveyDTO from 'src/dto/Survey.dto';
import ModelConstants from 'src/constants/ModelConstants';

@Injectable()
export class SurveyService {

  constructor(
    @Inject(ModelConstants.SURVEY_MODEL)
    private surveyModel: Model<Survey>,
  ) {
  }

  async create(survey: SurveyDTO): Promise<Survey> {
    const createdSurvey = new this.surveyModel(survey);
    return createdSurvey.save();
  }

  async getAll(): Promise<Survey[]> {
    return this.surveyModel.find().exec();
  }

  private createStatFor(data, property) {
    const p_name = property.replace(' ', '_');

    return  {
      ...data,
      [p_name]: Object.keys(data).includes(p_name) ? data[p_name] + 1 : 1,
    }
  }

  private getSurveyStat(surveys: Survey[]) {
    const result = surveys.reduce((acc, s) => {
      const socialCounts = this.createStatFor(acc.socialCounts, s.social);
      const occupationCounts = this.createStatFor(acc.occupationCounts, s.occupation);
      return {
        socialCounts,
        occupationCounts,
      }
    }, {
      socialCounts: {},
      occupationCounts: {},
    });

    return result;
  }

  async getStatistics(surveys: Survey[]): Promise<any> {
    return {
      total: surveys.length,
      ...this.getSurveyStat(surveys),
    }
  }
}
