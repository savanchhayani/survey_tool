import React, { ChangeEvent } from "react";
import { Form, Row, Col } from "react-bootstrap";

interface ISelectProps {
  selectedOption: string;
  options: string[];
  onChange(e: ChangeEvent<HTMLSelectElement>): void;
  name: string;
  title: string;
}

const SelectRow = ({
  title,
  selectedOption,
  options,
  onChange,
  name,
}: ISelectProps): JSX.Element => {
  return (
    <Row>
      <Col>{title}</Col>
      <Col>
        <Form.Control as="select" name={name} onChange={onChange}>
          {options.map((o: string) => (
            <option
              key={`${o.replace(" ", "-")}`}
              selected={o === selectedOption}
            >
              {o}
            </option>
          ))}
        </Form.Control>
      </Col>
    </Row>
  );
};

export default SelectRow;
