import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { SurveyService } from '../services/survey.service';
import SurveyDTO from 'src/dto/Survey.dto';

@Controller('/survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get()
  async getAll(@Res() res) {
    const surveys = await this.surveyService.getAll();
    const statistics = await this.surveyService.getStatistics(surveys);
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: {
        surveys,
        ...statistics,
      },
    });
  }

  @Post('/create')
  async save(@Res() res, @Body() createSurvey: SurveyDTO) {
    const survey = await this.surveyService.create(createSurvey);
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      message: 'successful',
      data: survey,
    });
  }
}
