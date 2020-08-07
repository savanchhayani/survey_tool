import { ISurveysState } from "../@types/reducers/survey";
import { SurveysListAction } from "../actions/survey";
import { SurveyAction } from "../enums/actions/survey";

const initialState: ISurveysState = {
  isProgress: false,
  surveys: [],
  total: 0,
  socialCounts: undefined,
  occupationCounts: undefined,
};

const surveys = (
  state = initialState,
  action: SurveysListAction
): ISurveysState => {
  switch (action.type) {
    case SurveyAction.SURVEY_LIST_INIT: {
      return {
        ...state,
        isProgress: true,
      };
    }
    case SurveyAction.SURVEY_LIST_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isProgress: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default surveys;
