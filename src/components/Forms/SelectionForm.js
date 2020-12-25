import React from 'react';
import styled from 'styled-components/macro';
import cardBg from '../../img/organization_bg.png';
/* import PropTypes from 'prop-types'; */

const FormContainer = styled.ul`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 260px 260px 260px 260px;
  column-gap: 24px;
  grid-template-rows: 204px 204px;
  row-gap: 36px;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 20px 0px;
`;
const ChozenLayer = styled.div`
      opacity: 0;
      width: 0;
      height: 0;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 20;
      box-shadow: 0px 0px 28px #FF7A00;
/*       border-top: orange 8px solid;
      border-bottom: orange 8px solid; */
`;
const RadioInput = styled.input`
  display: none;
  &:checked {
    & ~ ${ChozenLayer} {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: all 0.2s ease-out, width 0.2s ease-out;
      }
    }
`;

const RadioInputLabel = styled.label`
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  padding: 44px 28px;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 36px 12px;
  ${({bg}) => `
  background: url(${bg});
  `}

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-out;
  }

  &:before {
    content: '';
    width: 90%;
    height: 90%;
    display: inline-block;
    position: absolute;
    left: 5%;
    bottom: 5%;
    z-index: 5;
    background: #F2F2F2;
    opacity: 1;
  }
  &:hover:before {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  &:after {
    content: '${({ labelText }) => labelText}';
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    font-size: 18px;
    display: inline-block;
    position: absolute;
    left: 24px;
    bottom: 20px;
    z-index: 10;
    opacity: 1;
  }
  &:hover:after {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`;

const StyledLi = styled.li`
  width: 96%;
  height: 96%;
  position: relative;
  box-shadow: 0px 5px 5px rgba(0,0,0,.3);
  &:hover:nth-child(1) {
    ${RadioInputLabel} {
      transform-origin: bottom right;
    }
  }
  &:hover:nth-child(2) {
    ${RadioInputLabel} {
      transform-origin: bottom center;
    }
  }
  &:hover:nth-child(3) {
    ${RadioInputLabel} {
      transform-origin: bottom center;
    }
  }
  &:hover:nth-child(4) {
    ${RadioInputLabel} {
      transform-origin: bottom left;
    }
  }
  &:hover:nth-child(5) {
    ${RadioInputLabel} {
      transform-origin: top right;
    }
  }
  &:hover:nth-child(6) {
    ${RadioInputLabel} {
      transform-origin: center top;
    }
  }
  &:hover:nth-child(7) {
    ${RadioInputLabel} {
      transform-origin: center top;
    }
  }
  &:hover:nth-child(8) {
    ${RadioInputLabel} {
      transform-origin: top left;
    }
  }
`;
const LabelTitle = styled.h3`
  display: inline-block;
  color: orange;
  font-family: Open Sans;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 600;
  margin: 0 0 12px 0;
`;
const LabelInfo = styled.span`
  display: block;
  color: #fff;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;

`;

const SelectionForm = ({ handleSelection, array, areaName }) => (
  <FormContainer>
    { array.map((item, i) => (
          <StyledLi key={i + item.id}>
            <RadioInputLabel bg={item.image || cardBg} htmlFor={item.id} labelText={item.name}>
              <LabelTitle>{item.name}</LabelTitle>
              <LabelInfo>{item.info}</LabelInfo>
              <RadioInput
                onChange={handleSelection}
                type="radio"
                id={item.id}
                name={areaName}
                value={item.rhyme} />
              <ChozenLayer>&#10003;</ChozenLayer>
          </RadioInputLabel>
          </StyledLi>
    ))
    }
  </FormContainer>
);

SelectionForm.propTypes = {
};

export default SelectionForm;
