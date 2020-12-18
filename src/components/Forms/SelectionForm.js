import React from 'react';
import styled from 'styled-components/macro';
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
  padding: 0;
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
  padding-left: 25px;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 0;

  &:after {
    content: '${({labelText}) => labelText}';
    font-size: 18px;
    display: inline-block;
    position: absolute;
    left: 24px;
    bottom: 20px;
  }
  &:hover:after {
    bottom: 40px;
    transition: bottom 0.2s ease-out;
  }
`;

const SelectionForm = ({ handleSelection, array, areaName }) => (
  <FormContainer>
    { array.map((item, i) => {
        return (
          <li key={i + item.id}>
            <RadioInputLabel htmlFor={item.id} labelText={item.name}>
              <RadioInput
                onChange={handleSelection}
                type="radio"
                id={item.id}
                name={areaName}
                value={item.rhyme} />
              <ChozenLayer />
          </RadioInputLabel>
          </li>
        )
      })
    }
  </FormContainer>
);

SelectionForm.propTypes = {
};

export default SelectionForm;
