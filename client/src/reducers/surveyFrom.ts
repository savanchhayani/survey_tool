import { SurveyFormAction } from "../actions/survey";
import { ISurveyFormState } from "../@types/reducers/survey";
import { SurveyAction } from "../enums/actions/survey";

const initialState: ISurveyFormState = {
  isProgress: false,
};

const surveyForm = (state = initialState, action: SurveyFormAction): ISurveyFormState => {
  switch (action.type) {
    case SurveyAction.CREATE_SURVEY_INIT: {
      return {
        ...state,
        isProgress: true,
      };
    }

    case SurveyAction.CREATE_SURVEY_SUCCESS: {
      return {
        ...state,
        isProgress: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default surveyForm;
