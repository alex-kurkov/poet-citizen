import styled from 'styled-components/macro';

const StyledLabel = styled.label`
  position: relative;
  font-family: Open Sans, sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.38;
  margin: 0 0 16px 0;
  display: block;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  cursor: text;
  width: 100%;
  height: 44px;
  background: #f2f2f2;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 4px 8px;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
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
  position: absolute;
  left: 24px;
  bottom: 24px;
  width: calc(100% - 48px);
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
const Button = styled.button`
  display: inline-block;
  width: initial;
  min-width: 30%;
  box-sizing: border-box;
  height: 50px;
  line-height: 1.33;
  border-radius: 2px;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  text-align: center;
  line-height: 1.2;
  padding: 0 4px;
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const SubmitBtn = styled(Button)`
  border: none;
  background-color: #FF7A00;
  color: #000;
  ${({ disabled }) => disabled && 
  `
  cursor: inherit;
  opacity: .2;
  &:hover {
    transform: none;
  }
  `}
`
const SwapAuthBtn = styled(Button)`
  border: #FF7A00 1px solid;
  background-color: transparent;
  color: #212228;
`
const ButtonWrapper = styled.div`
  padding: 16px 0 4px 0;
  display: grid;
  grid-template-columns: minmax(min-content,75%) minmax(min-content,75%);
  gap: 8px;
  justify-content: space-between;
`;

export {
  StyledLabel,
  StyledInput,
  ErrorIndicator,
  ErrorMessage,
  StyledForm,
  StyledFieldset,
  StyledLegend,
  SubmitBtn,
  SwapAuthBtn,
  ButtonWrapper,
};