import { Occupations, SocialAccounts } from "../../enums/form";

declare interface ISurvey {
  name: string;
  email: string;
  occupation: Occupations;
  social: SocialAccounts;
  age: number;
}

declare interface ISurveysState {
  isProgress: boolean;
  surveys: ISurvey[];
  total: 0;
  socialCounts: { [key: string]: number } | undefined;
  occupationCounts: { [key: string]: number } | undefined;
}

declare interface ISurveyFormState {
  isProgress: boolean;
}
