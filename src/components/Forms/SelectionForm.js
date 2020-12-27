import React from 'react';
import styled from 'styled-components/macro';
import cardBg from '../../img/organization_bg.png';
import {
  OrganizationItem,
  OrganizationInfo,
} from '../Texts';
/* import PropTypes from 'prop-types'; */

const FormContainer = styled.ul`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 280px 280px 280px 280px;
  column-gap: 12px;
  grid-template-rows: 220px 220px;
  row-gap: 12px;
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
      border: #FF7A00 12px solid;
`;
const RadioInput = styled.input`
  display: none;
  &:checked {
    & ~ ${ChozenLayer} {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: all 0.2s ease-out;
      }
    }
`;

const RadioInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
  width: 100%;
  height: 100%;
  padding: 16px 16px;
  ${({bg}) => `
  background: url(${bg});
  `}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-out;
  }

  &:before {
    content: '';
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    display: inline-block;
    position: absolute;
    left: 12px;
    bottom: 12px;
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
    bottom: 24px;
    z-index: 10;
    opacity: 1;
  }
  &:hover:after {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`;

const StyledLi = styled.li`
  width: 94%;
  height: 94%;
  align-self: center;
  justify-self: center;
  position: relative;
 
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

const SelectionForm = ({ handleSelection, array, areaName }) => (
  <FormContainer>
    { array.map((item, i) => (
          <StyledLi key={i + item.id}>
            <RadioInputLabel bg={item.image || cardBg} htmlFor={item.id} labelText={item.name}>
              <OrganizationItem>{item.name}</OrganizationItem>
              <OrganizationInfo>{item.info}</OrganizationInfo>
              <RadioInput
                required
                onChange={handleSelection}
                type="radio"
                id={item.id}
                name={areaName}
                value={item.rhyme} />
              <ChozenLayer></ChozenLayer>
          </RadioInputLabel>
          </StyledLi>
    ))
    }
  </FormContainer>
);

SelectionForm.propTypes = {
};

export default SelectionForm;
