import React from 'react';
import {
  useHistory,
  /* useRouteMatch */
} from 'react-router-dom';
import styled from 'styled-components/macro';
import { SuccessText } from './Texts';
import IcQuote from './IcQuote';
/* import PropTypes from 'prop-types'; */

const SuccessBlock = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 552px 360px;
  column-gap: 120px;
  grid-template-rows: 128px 76px 400px;
  row-gap: 24px;
  grid-template-areas: 
    'poem info'
    'poem submit'
    'poem action';
  padding: 0;
`;
const PoemBlockWrapper = styled.div`
  position: relative;
  grid-area: poem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: #000 1px solid;
  padding: 44px 24px 52px 24px;
  box-sizing: border-box;
`;
const PoemBlock = styled.div`
  grid-area: poem;
  height: 100%;
  background: none;
  padding-right: 8px;
  box-sizing: border-box;
  white-space: pre;
  font-family: Noto serif, serif;
  font-size: 20px;
  font-weight: 400;
  line0height: 25px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
    border: 1px solid #000;
    border-radius: 2px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    height: 35px;
    background-color: #43D3B2;
    border-radius: 2px;
  }
`;

const IcQuotesWrap = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0px;
  left: -36px;
  border-radius: 50%;
  background: none;
`;

const SubmitBtn = styled.button`
  grid-area: submit;
  width: 360px;
  height: 76px;
  font-family: Open Sans, sans serif;
  font-weight: 500px;
  font-size: 24px;
  background: #FF7A00;
  border: none;
  transition: all ease-in-out .3s;
  transform-origin: center;
  
  &:hover {
    transform: scale(1.05);
  }

${({enabled}) => enabled 
  ?
    `  &:after {
        content: 'Готово!'
    }`
  : 
    `  &:after {
      content: ' СНАЧАЛА СДЕЛАЙТЕ СВОЙ ВЫБОР!'
    }`
  }
`;

const ActionBtn = styled.button`
  grid-area: action;
  align-self: end;
  justify-self: end;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  font-family: 'Open Sans', sans serif;
  font-weight: 500;
  font-size: 24px;
  background: transparent;
  border: 4px solid #ff7a00;
  align-self: end;
  justify-self: center;
  margin-bottom: 12px;
  transition: transform ease-in-out .3s;

  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
`;

const Success = ({ 
  poem, 
  actionBtnRoute = '/', 
  actionBtnText = '', 
  organizationChecked,
  emotionChecked,
}) => {

  const history = useHistory();

  return (
    <SuccessBlock>
      <PoemBlockWrapper>
        <IcQuotesWrap>
          <IcQuote fill="#FF7A00"/>
        </IcQuotesWrap>
        <PoemBlock>{poem}</PoemBlock>
      </PoemBlockWrapper>
      <SuccessText>
      Для отправки обращения, после нажатия кнопки “Готово”, Вам потребуется заполнить данные,
      если Вы не зарегистрировыны.
      </SuccessText>
      <SubmitBtn
        type="submit"
        enabled={(organizationChecked && emotionChecked)} />
        <ActionBtn
          type="button"
          onClick={() => history.push(actionBtnRoute)}>
        {actionBtnText}
        </ActionBtn>
    </SuccessBlock>
  );
};

Success.propTypes = {
};

export default Success;
