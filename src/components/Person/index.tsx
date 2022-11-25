import React from "react";

import PersonImage from "../../assets/person.png";
import { IPerson } from "../../utils/interfaces";

import { Container } from "./styles";

const Person = ({ name }: IPerson) => {
  return (
    <Container>
      <p>{name}</p>
      <img src={PersonImage} alt="Person" />
    </Container>
  );
};

export default Person;
