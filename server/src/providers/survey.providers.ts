import { Connection } from 'mongoose';
import ModelConstants from "src/constants/ModelConstants";
import DBConstants from 'src/constants/DBConstants';
import { SurveySchema } from 'src/schemas/survey.schema';

export const surveyProviders = [
  {
    provide: ModelConstants.SURVEY_MODEL,
    useFactory: (connection: Connection) => connection.model('Survey', SurveySchema),
    inject: [DBConstants.DATABASE_CONNECTION],
  }
];
