import { createSelector } from 'reselect';
import { IState } from "../@types/reducers";

const getSurveys = (state: IState) => state.surveys.surveys;

const getStatistics = (state: IState) => {
  const { occupationCounts, socialCounts, total } = state.surveys;
  return {
    total,
    socialCounts,
    occupationCounts,
  }
}

const calculatePercentageFrom = (count: number, totalCount: number) => ((count * 100) / totalCount).toFixed(2);
const getStats = (rest: {[key: string]: number}, total: number) => {
  return Object.entries(rest).reduce((c_acc, [c_key, c_value]) => ({
    ...c_acc,
    [c_key]: {
      per: `${calculatePercentageFrom(c_value, total)}%`,
      total: c_value,
    },
  }), {});
}

const getSurveysInPercentage = createSelector(
  [getStatistics],
  ({ total, socialCounts, occupationCounts}) => {
    return {
      total,
      socials: socialCounts && getStats(socialCounts, total),
      occupations: occupationCounts && getStats(occupationCounts, total),
    }
  }
);

export { getSurveys, getSurveysInPercentage };
