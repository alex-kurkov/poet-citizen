import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const ActionContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-template-rows: 340px;
  margin-top: 36px;
  column-gap: 24px;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
`;

const ActionInput = styled.p`
  width: 100%;
  height: min-content;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  margin-top: 0;
`;

const ActionBox = styled.button`
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  position: relative;
  padding: 36px 32px;
  margin-right: 0;
  line-height: 18px;
  width: 100%;
  height: 100%;
  background: #eee;
  cursor: pointer;
  border: none;

  &:hover {
      tranform: scale(1.5);
  }
`;

const ActionList = ({ array }) => {
  const history = useHistory();

  return (
  <ActionContainer>

    { array.map((item, i) => (
        <li key={i + item.id}>
          <ActionBox
            onClick={() => {
              history.push(item.link);
            }}
            type='button'>

            <ActionInput>{item.title}</ActionInput>
          </ActionBox>
        </li>
    ))
    }
  </ActionContainer>
  );
};

export default ActionList;
