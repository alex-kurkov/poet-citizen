import React from 'react';
import styled from 'styled-components/macro';
import {
  Anger,
  Fear,
  Joy,
  Sorrow,
  Disgust,
  Disappointment,
  Pride,
  Panic,
  Neutral,
} from '../Emoticons/index';
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

const EmoticonWrapper = styled.div`
  width: 132px;
  height: 132px;
`

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
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  margin-right: 0;
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;

  &:hover .path {
    fill: orange;
    transition: fill .3s ease-in-out;
  } 
/*   &:hover .emoticon {
    transform: scale(1.2);
    transition: transform .3s ease-in-out;
  }  */
  &:hover .label-title {
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }
`;

const StyledLi = styled.li`
  border: 1px #212228 solid;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const LabelTitle = styled.h3`
  display: inline-block;
  color: #212228;
  font-family: Open Sans, sans-serif;
  font-size: 28px;
  line-height: 1.5;
  font-weight: 600;
  margin: 0;
`;


const SelectionForm = ({ handleSelection, array, areaName }) => (
  <FormContainer>
    { array.map((item, i) => (
          <StyledLi key={i + item.id}>

            <RadioInputLabel className="label" htmlFor={item.id} labelText={item.name}>
              <EmoticonWrapper className="wrapper">
                {item.id === 'anger' && (<Anger fill="#43D3B2"/>)}
                {item.id === 'fear' && (<Fear fill="#43D3B2"/>)}
                {item.id === 'joy' && (<Joy fill="#43D3B2"/>)}
                {item.id === 'sorrow' && (<Sorrow fill="#43D3B2"/>)}
                {item.id === 'disgust' && (<Disgust fill="#43D3B2"/>)}
                {item.id === 'disappointment' && (<Disappointment fill="#43D3B2"/>)}
                {item.id === 'pride' && (<Pride fill="#43D3B2"/>)}
                {item.id === 'panic' && (<Panic fill="#43D3B2"/>)}
                {!item.id && (<Neutral fill="#43D3B2"/>)}
              </EmoticonWrapper>
              <LabelTitle className="label-title">{item.name}</LabelTitle>
              <RadioInput
                onChange={handleSelection}
                type="radio"
                id={item.id}
                name={areaName}
                value={item.rhyme} />
              <ChozenLayer />
          </RadioInputLabel>
          </StyledLi>
    ))
    }
  </FormContainer>
);

SelectionForm.propTypes = {
};

export default SelectionForm;
