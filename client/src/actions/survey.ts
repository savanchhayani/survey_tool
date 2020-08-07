import { ISurvey } from "../@types/reducers/survey";
import {
  ICreateSurveyAction,
  ICreateSurveySuccessAction,
  ISurveyListFetchAction,
  ISurveysListSuccessAction,
} from "../@types/actions/survey";
import { SurveyAction } from "../enums/actions/survey";

const createSurvey = (form: ISurvey): ICreateSurveyAction => ({
  type: SurveyAction.CREATE_SURVEY_INIT,
  payload: form,
});

const surveyCreated = (): ICreateSurveySuccessAction => ({
  type: SurveyAction.CREATE_SURVEY_SUCCESS,
});

const fetchSurveys = (): ISurveyListFetchAction => ({
  type: SurveyAction.SURVEY_LIST_INIT,
});

const surveyFetchSuccess = (lists: ISurvey[]): ISurveysListSuccessAction => ({
  type: SurveyAction.SURVEY_LIST_SUCCESS,
  payload: lists,
});

export { createSurvey, surveyCreated, fetchSurveys, surveyFetchSuccess };

export type SurveyFormAction = ICreateSurveyAction | ICreateSurveySuccessAction;
export type SurveysListAction = ISurveyListFetchAction | ISurveysListSuccessAction;
