import React from "react";
import styled from "styled-components";

const TextLeft = styled.div`
  * {
    text-align: left;
  }
  button {
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    background-color: lightseagreen;
  }
`;

export default ({ children, ...rest }) =>
  <TextLeft {...rest}>
    {children}
  </TextLeft>;
