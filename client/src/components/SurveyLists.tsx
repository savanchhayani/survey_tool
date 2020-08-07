import React from "react";
import { Table } from "react-bootstrap";

import { ISurvey } from "../@types/reducers/survey";
import SurveyHeader from "./SurveyHeader";
import SurveyItem from "./SurveyItem";

interface IProps {
  surveys: ISurvey[];
  fetchSurveys(): void;
}

const defaultProps = {
  surveys: [],
};

class SurveyList extends React.PureComponent<IProps> {
  static defaultProps = defaultProps;

  componentDidMount() {
    this.props.fetchSurveys();
  }

  render(): React.ReactNode {
    const { surveys } = this.props;

    return (
      <Table striped bordered hover variant="dark">
        <SurveyHeader />
        <tbody>
          {surveys.map((s: ISurvey, index) => (
            <SurveyItem key={`${s.email}${index}`} {...s} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default SurveyList;
