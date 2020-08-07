import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SurveyForm from "../components/SurveyForm";

import { createSurvey } from "../actions/survey";
import { IState } from "../@types/reducers";

const mapState = (state: IState) => ({
  isProgress: state.surveyForm.isProgress,
});

const mapDispatch = (dispatch: any) =>
  bindActionCreators(
    {
      onSubmit: createSurvey,
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(SurveyForm);
