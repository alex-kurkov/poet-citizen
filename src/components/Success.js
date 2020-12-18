import React from 'react';
import {
  useHistory,
  /* useRouteMatch */
} from 'react-router-dom';
import styled from 'styled-components/macro';
import {LeadText} from './Texts';
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
const PoemBlock = styled.div`
  grid-area: poem;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ebebeb;
  padding: 8px;
  box-sizing: border-box;
  white-space: pre;
  font-size: 24px;
  font-weight: 500;
`
const SubmitBtn = styled.button`
  grid-area: submit;
  width: 360px;
  height: 76px;
  font-family: 'Open Sans';
  font-weight: 500px;
  font-size: 24px;
  background: #dedede;
  border: none;

  &:hover {
    opacity: .7;
    transition: opacity ease-in-out .3s;
  }
`;
const ActionBtn = styled.button`
  grid-area: action;
  align-self: end;
  justify-self: end;
  width: 332px;
  height: 332px;
  border-radius: 50%;
  font-family: 'Open Sans';
  font-weight: 500px;
  font-size: 24px;
  background: #c4c4c4;
  border: none;

  &:hover {
    opacity: .7;
    transition: opacity ease-in-out .3s;
  }
  &:focus {
    outline: none;
  }
`;


const Success = ({ poem }) => {
const history = useHistory();

  const handleRedirect = () => {
    history.push('/main');
  }

  return (
    <SuccessBlock>
      <PoemBlock> 
        {poem}
      </PoemBlock>
      <LeadText>
      Для отправки обращения, после нажатия кнопки “Готово”, Вам потребуется заполнить данные, если Вы не зарегистрировыны. 
      </LeadText>
      <SubmitBtn
        type="submit"
      
      >
        Готово!</SubmitBtn>
        <ActionBtn
          type="button"
          onClick={handleRedirect}>
        {'А другие\nинициативы\nты уже оценил?'}
        </ActionBtn>
    </SuccessBlock>
  )
};

Success.propTypes = {
};

export default Success;
