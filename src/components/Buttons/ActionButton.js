import React from 'react';
import styled from 'styled-components/macro';
import { BegeSpan } from '../Texts';

const ActionButton = styled.button`
  position: absolute;
  top: 50%;
  left: 100%;
  grid-area: action;
  align-self: end;
  justify-self: end;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  font-family: Open Sans, Lato, sans-serif;
  font-weight: 600px;
  font-size: 26px;
  background: #FF7A00;
  border: none;
  white-space: pre;
  transition: transform ease-in-out .3s;

  &:hover {
    width: 372px;
    height: 372px;
    font-size: 28px;
  }
  &:focus {
    outline: none;
  }
`;


const ActionBtn = ({ handleRedirect, text, textSpan }) => (
  <ActionButton type='button' onClick={handleRedirect}>
    {'Предложите\nвигилантам\nсделать '}
    <BegeSpan>{'доброе\nдело'}</BegeSpan>
  </ActionButton>
);

export default ActionBtn;
