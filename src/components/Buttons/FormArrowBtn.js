import React from 'react';
import styled from 'styled-components/macro';
import { consts } from 'react-elastic-carousel';
import { LeftArrow, RightArrow } from '../icons/index';

const ArrowBtn = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: translate(0px, 200px);
  ${(props) => props.disabled
    && ` cursor: inherit;
      opacity: .3;
    `}
`;

const FormArrowBtn = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <LeftArrow fill="gray"/> : <RightArrow fill="gray"/>;
  return (
    <ArrowBtn onClick={onClick} disabled={isEdge}>
      {pointer}
    </ArrowBtn>
  );
};

export default FormArrowBtn;
