import { call, put, takeLatest } from "redux-saga/effects";
import { ICreateSurveyAction, ISurveyListFetchAction } from "../../@types/actions/survey";
import { SurveyAction } from "../../enums/actions/survey";
import transportInstance from "../../transport/Transport";
import { surveyCreated, surveyFetchSuccess, fetchSurveys } from "../../actions/survey";

/**
 * Creates a survey.
 */
function* handleCreateSurvey(action: ICreateSurveyAction) {
  const res = yield call(transportInstance.creatSurvey, action.payload);

  try {
    if (res.status === 201) {
      yield put(surveyCreated());
      yield put(fetchSurveys());
      alert('Survey submit successfully')
    }
  } catch (e) {
    console.log(e);
  }
}

/**
 * Fetches all the surveys.
 */
function* handleFetchSurveys(action: ISurveyListFetchAction) {
  const res = yield call(transportInstance.getSurveys);

  try {
    if (res.status === 200) {
      yield put(surveyFetchSuccess(res.data.data))
    }
  } catch(e) {
    console.log(e);
  }
}

export default function* rootSurvey() {
  yield takeLatest(SurveyAction.CREATE_SURVEY_INIT, handleCreateSurvey);
  yield takeLatest(SurveyAction.SURVEY_LIST_INIT, handleFetchSurveys);
}
