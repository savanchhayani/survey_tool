import { SurveyAction } from "../../enums/actions/survey";
import { ISurvey } from "../reducers/survey";

declare type ICreateSurveyAction = {
  type: SurveyAction.CREATE_SURVEY_INIT;
  payload: ISurvey;
};

declare type ICreateSurveySuccessAction = {
  type: SurveyAction.CREATE_SURVEY_SUCCESS;
};

declare type ISurveyListFetchAction = {
  type: SurveyAction.SURVEY_LIST_INIT;
}

declare type ISurveysListSuccessAction = {
  type: SurveyAction.SURVEY_LIST_SUCCESS;
  payload: ISurvey[];
}
