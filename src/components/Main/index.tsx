import React from "react";

import { Container } from "./styles";

interface MainProps {
  text: string;
}

const Main = ({ text }: MainProps) => {
  return (
    <Container>
      <h1>
        Hello, <span>I am</span> {text.replace(".", " ")}
      </h1>
    </Container>
  );
};

export default Main;
