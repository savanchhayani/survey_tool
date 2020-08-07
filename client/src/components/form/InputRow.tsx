import React, { ChangeEvent } from "react";
import { Row, Col, Form } from "react-bootstrap";

interface InputRow {
  type: "email" | "text";
  title: string;
  name: string;
  value: string;
  placeholder: string;
  error: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const InputRow = ({
  type,
  title,
  placeholder,
  error,
  ...props
}: InputRow): JSX.Element => (
  <Row>
    <Col>{title}</Col>
    <Col>
      <Form.Control type={type} placeholder={placeholder} {...props} />
      {error && <Form.Text className="text-muted">{error}</Form.Text>}
    </Col>
  </Row>
);

export default InputRow;
