import React from "react";
import DashItem from "./DashItem";
import { AppConstants } from "../../constants";

type StatItem = {
  per: string;
  total: number;
};

type Statistics = {
  [key: string]: StatItem;
};

interface Props {
  socials?: Statistics;
  occupations?: Statistics;
  total: number;
  fetchSurveys(): void;
}

class Dashboard extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderStat = (
    ob?: Statistics,
  ): JSX.Element | undefined => {
    return (
      ob && (
        <div className="dash-item-row">
          {Object.entries(ob).map(([key, item]) => {
            return (
              <DashItem
                className="app-card"
                title={key.replace('_', ' ')}
                value={item.per}
              />
            );
          })}
        </div>
      )
    );
  };

  render(): React.ReactNode {
    const { socials, occupations, total } = this.props;

    return (
      <div className="dashboard-view">
        <h1>{AppConstants.DASHBOARD}</h1>
        <DashItem
          className="app-card total-survey"
          title={AppConstants.TOTAL_SURVEYS}
          value={total}
        />
        {this.renderStat(socials)}
        {this.renderStat(occupations)}
      </div>
    );
  }
}

export default Dashboard;
