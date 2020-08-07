import React from "react";
import { AppConstants } from "../constants";

interface IProps {}

type Header = {
  title: string;
  className: string;
};

class SurveyHeader extends React.PureComponent<IProps> {
  headers: Header[];

  constructor(props: IProps) {
    super(props);

    this.headers = [
      { title: AppConstants.NAME, className: "name" },
      { title: AppConstants.EMAIL, className: "email" },
      { title: AppConstants.AGE, className: "age" },
      { title: AppConstants.OCCUPATION, className: "occupation" },
      { title: AppConstants.SOCIAL, className: "social" },
    ];
  }

  render(): React.ReactNode {
    return (
      <thead className="survey-list-header">
        <tr>
          {this.headers.map(({ title, className }: Header) => (
            <th key={title} className={className}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default SurveyHeader;
