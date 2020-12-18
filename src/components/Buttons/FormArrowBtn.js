import React from 'react';
import styled from 'styled-components/macro';
import { LeftArrow, RightArrow } from '../icons/index';
import { consts } from 'react-elastic-carousel';

const ArrowBtn = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: translate(0px, 200px);
  ${(props) => props.disabled &&
    ` cursor: inherit;
      opacity: .1;
    `}
`;

const FormArrowBtn = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <LeftArrow fill="gray"/> : <RightArrow fill="gray"/>
  return (
    <ArrowBtn onClick={onClick} disabled={isEdge}>
      {pointer}
    </ArrowBtn>
  )
};

export default FormArrowBtn;
