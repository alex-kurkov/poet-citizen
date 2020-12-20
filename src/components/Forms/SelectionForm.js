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
`
const ChozenLayer = styled.div`
    width: 0;
    height: 0;
    &::before {
      content: "";
      opacity: 0;
      width: 0px;
      position: absolute;
      top: 0;
      left: 0;
    }
`;
const RadioInput = styled.input`
  display: none;
  &:checked {
    & ~ ${ChozenLayer} {
      box-sizing: border-box;
      border: 10px red solid;
      width: 100%;
      height: 100%;
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`

const RadioInputLabel = styled.label`
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  padding: 44px 28px;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${cardBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 36px 12px;


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
    content: '${({labelText}) => labelText}';
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
    { array.map((item, i) => {
        return (
          <StyledLi key={i + item.id}>
            <RadioInputLabel htmlFor={item.id} labelText={item.name}>
              <LabelTitle>{item.name}</LabelTitle>
              <LabelInfo>{item.info}</LabelInfo>
              <RadioInput
                onChange={handleSelection}
                type="radio"
                id={item.id}
                name={areaName}
                value={item.rhyme} />
              <ChozenLayer />
          </RadioInputLabel>
          </StyledLi>
        )
      })
    }
  </FormContainer>
);

SelectionForm.propTypes = {
};

export default SelectionForm;
