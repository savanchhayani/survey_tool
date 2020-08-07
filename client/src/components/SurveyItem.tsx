import React, { PureComponent, ReactNode } from "react";
import { ISurvey } from "../@types/reducers/survey";

interface IProps extends ISurvey {}

class SurveyItem extends PureComponent<IProps> {
  render(): ReactNode {
    const { email, name, age, social, occupation } = this.props;

    return (
      <tr className="survey-item">
        <td className="name">{name}</td>
        <td className="email">{email}</td>
        <td className="age">{age}</td>
        <td className="social">{social}</td>
        <td className="occupation">{occupation}</td>
      </tr>
    );
  }
}

export default SurveyItem;
