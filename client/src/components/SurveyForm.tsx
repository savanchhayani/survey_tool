import React, { ChangeEvent } from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { ISurvey } from "../@types/reducers/survey";

import { SelectRow, InputRow } from "./form";

import { AppConstants, SurveyQuestions } from "../constants";
import surveyFormHelper, { ErrorsType } from "../helpers/SurveyFormHelper";

interface IProps {
  isProgress: boolean;
  onSubmit(form: ISurvey): void;
}

interface IState {
  form: ISurvey;
  errors: ErrorsType;
}

type InputType = ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>;

class SurveyForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      form: surveyFormHelper.getDefaultForm(),
      errors: surveyFormHelper.getDefaultErrors(),
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(e: InputType): void {
    const { name, value } = e.target;
    const { form } = this.state;

    const updatedForm = surveyFormHelper.updateForm(form, {
      name,
      value,
    });

    this.setState((prevState) => ({
      form: updatedForm,
    }));
  }

  handleSubmit() {
    const { form } = this.state;
    let updatedForm = { ...form };
    let errors = surveyFormHelper.getErrors(updatedForm);

    if (!surveyFormHelper.hasValidationError(errors)) {
      this.props.onSubmit(updatedForm);
      errors = surveyFormHelper.getDefaultErrors();
      updatedForm = surveyFormHelper.getDefaultForm();
    }

    this.setState({
      errors,
      form: updatedForm,
    });
  }

  render(): React.ReactNode {
    const {
      form: { email, name, age, occupation, social },
      errors: { email: emailError, name: nameError, age: ageError },
    } = this.state;

    const { isProgress } = this.props;

    return (
      <Container>
        <Form className="survey-form-container">
          <h1>{AppConstants.SURVEY_FORM}</h1>
          <InputRow
            type="text"
            name="name"
            title={AppConstants.ENTER_YOUR_NAME}
            placeholder={AppConstants.ENTER_YOUR_NAME}
            value={name}
            error={nameError}
            onChange={this.updateForm}
          />

          <InputRow
            type="email"
            name="email"
            title={AppConstants.ENTER_EMAIL_ADDRESS}
            placeholder={AppConstants.ENTER_EMAIL_ADDRESS}
            value={email}
            error={emailError}
            onChange={this.updateForm}
          />

          <InputRow
            type="text"
            name="age"
            title={AppConstants.AGE}
            placeholder={AppConstants.AGE}
            value={age === 0 ? "" : String(age)}
            error={ageError}
            onChange={this.updateForm}
          />

          <SelectRow
            title={SurveyQuestions.QUESTION_CURRENT_OCCUPATION}
            name="occupation"
            onChange={this.updateForm}
            options={surveyFormHelper.getOccupations()}
            selectedOption={occupation}
          />

          <SelectRow
            title={SurveyQuestions.QUESTION_ABOUT_OUT_WEBSITE}
            name="social"
            onChange={this.updateForm}
            options={surveyFormHelper.getSocialAccounts()}
            selectedOption={social}
          />

          <Row>
            <Col></Col>
            <Col>
              <Button variant="primary" onClick={this.handleSubmit}>
                {isProgress && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {!isProgress && AppConstants.SUBMIT}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default SurveyForm;
