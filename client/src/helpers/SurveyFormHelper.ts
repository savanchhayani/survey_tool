import { SocialAccounts, Occupations } from "../enums/form";
import { ISurvey } from "../@types/reducers/survey";
import Validation from "../models/Validation";

export type ErrorsType = { [key: string]: string };

class SurveyFormHelper {
  private socialAccounts: string[];
  private occupations: string[];
  private defaultForm: ISurvey;
  private errors: ErrorsType;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.socialAccounts = [
      SocialAccounts.Facebook,
      SocialAccounts.LinkedIn,
      SocialAccounts.Twitter,
      SocialAccounts.Instagram,
    ];

    this.occupations = [
      Occupations.FullTime,
      Occupations.PartTime,
      Occupations.Permanent,
    ];

    this.defaultForm = {
      email: "",
      name: "",
      occupation: Occupations.FullTime,
      social: SocialAccounts.Instagram,
      age: 0,
    };

    this.errors = {
      name: "",
      email: "",
      age: "",
    };
  }

  getDefaultForm = (): ISurvey => this.defaultForm;
  getSocialAccounts = (): string[] => this.socialAccounts;
  getOccupations = (): string[] => this.occupations;
  getDefaultErrors = (): ErrorsType => ({ ...this.errors });
  hasValidationError = (errors: ErrorsType): boolean => !!Object.values(errors).find(value => value !== '');

  getErrors = (form: ISurvey): ErrorsType => {
    const errors = this.getDefaultErrors();

    if (form.age.toString() === "0") {
      errors.age = "Please enter your age";
    } else if (form.age < 1 || form.age > 100) {
      errors.age = "Age must be between 1 to 100";
    }

    if (form.email === "") {
      errors.email = "Please enter your email";
    } else if (!Validation.isEmailValid(form.email)) {
      errors.email = "Please enter valid email";
    }

    if (form.name == "") {
      errors.name = "Please enter your name";
    }

    return errors;
  };

  updateForm = (
    prevForm: ISurvey,
    { name, value }: { name: string; value: string }
  ): ISurvey => {
    let inputValue: number | string = value;

    const updatedForm = {
      ...prevForm,
      [name]: inputValue,
    };
    return updatedForm;
  };
}

const surveyFormHelper = new SurveyFormHelper();
export default surveyFormHelper;
