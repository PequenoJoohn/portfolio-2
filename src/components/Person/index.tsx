import React from "react";

import PersonImage from "../../assets/person.png";

import { Container } from "./styles";

const Person = () => {
  return (
    <Container>
      <img src={PersonImage} alt="Person" />
    </Container>
  );
};

export default Person;
