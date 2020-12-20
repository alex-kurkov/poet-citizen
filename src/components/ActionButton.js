import React from "react";
import styled from "styled-components/macro";

const ActionButton = styled.button`
  position: absolute;
  top: 50%;
  left: 100%;
  grid-area: action;
  align-self: end;
  justify-self: end;
  width: 332px;
  height: 332px;
  border-radius: 50%;
  font-family: "Open Sans";
  font-weight: 600px;
  font-size: 26px;
  background: #e0e0e0;
  border: none;

  &:hover {
    opacity: 0.7;
    transition: opacity ease-in-out 0.3s;
  }
  &:focus {
    outline: none;
  }
`;

const ActionButtonText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const ActionButtonTextSpan = styled.span`
  color: #ff7a00;
`;

const ActionBtn = ({ handleRedirect, text, textSpan }) => (
  <ActionButton type="button" onClick={handleRedirect}>
    <ActionButtonText>{text}{" "}
      <ActionButtonTextSpan> {textSpan}</ActionButtonTextSpan>
    </ActionButtonText>
  </ActionButton>
);

export default ActionBtn;
