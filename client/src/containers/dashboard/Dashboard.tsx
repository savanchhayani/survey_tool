import { connect } from 'react-redux';
import Dashboard from '../../components/dashboard/Dashboard';
import { IState } from '../../@types/reducers';
import { getSurveysInPercentage } from '../../selectors/survey';
import { fetchSurveys } from '../../actions/survey';

const mapState = (state: IState) => {
  return {
    ...getSurveysInPercentage(state),
  }
};

const mapDispatch = (dispatch: any) => {
  return {
    fetchSurveys: () => dispatch(fetchSurveys()),
  }
};

export default connect(mapState, mapDispatch)(Dashboard);
