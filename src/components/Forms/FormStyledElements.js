import styled from 'styled-components/macro';

const StyledLabel = styled.label`
  position: relative;
  font-family: Open Sans, sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.38;
  margin: 0;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  cursor: text;
  width: 100%;
  height: 44px;
  background: #fbfbfb;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0 2px 4px 2px;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  margin: 4px 0 16px;
  border: 1px solid #bcbaba;

  ${({ error }) => error &&
   'color: red;'
  }
`

const ErrorIndicator = styled.div`
  position: absolute;
  top: 4px;
  left: -12px;
  color: #f00;

  &::before {
    content: '*';
  }
`;
const ErrorMessage = styled.span`
  width: 100%;
  height: fit-content;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #f00;
  margin-bottom: 12px
`;
const StyledForm = styled.form`
  margin: 0 auto;
  display: block;
`;
const StyledFieldset = styled.fieldset`
  color: #000;
  border: none;
  margin: 0 0 48px 0;
  text-align: left;
`;
const StyledLegend = styled.legend`
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #000;
  margin: 0 auto 24px;
  text-align: left;
`;
const SubmitBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  line-height: 1.33;
  border-radius: 2px;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  text-align: center;
  border: none;
  line-height: 1.2;
  background-color: #c4c4c4;;
  color: #000;
  padding: 0;
  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .65;
  }
  ${({ disabled }) => disabled && 
  `
  cursor: inherit;
  opacity: .2;
  &:hover {
    opacity: .2;
  }
  `}
`

export {
  StyledLabel,
  StyledInput,
  ErrorIndicator,
  ErrorMessage,
  StyledForm,
  StyledFieldset,
  StyledLegend,
  SubmitBtn,
};