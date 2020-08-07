import { connect } from 'react-redux';
import { IState } from '../@types/reducers';
import SurveyList from '../components/SurveyLists';
import { getSurveys } from '../selectors/survey';
import { fetchSurveys } from '../actions/survey';

const mapState = (state: IState) => ({
  surveys: getSurveys(state),
});

const mapDispatch = (dispatch: any) => {
  return {
    fetchSurveys: () => dispatch(fetchSurveys()),
  }
};

export default connect(mapState, mapDispatch)(SurveyList);
