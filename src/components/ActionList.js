import React from 'react';
import styled from 'styled-components/macro';

const ActionContainer = styled.ul`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 360px 360px 360px;
  column-gap: 24px;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
`;

const ActionBox = styled.div`
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  position: relative;
  padding-left: 25px;
  margin-right: 0;
  line-height: 18px;
  width: 100%;
  height: 100%;
  background: #eee;
  cursor: pointer;
`;

const ActionInput = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;
margin-top: 0;
margin-bottom: 20px;
`;

const ActionList = ({ handleOnClick, array }) => (
  <ActionContainer>
    { array.map((item, i) => {
      return (
        <li key={i + item.id}>
          <ActionBox>
            <ActionInput>
              onClick={handleOnClick}
                type='button'
                id={item.id}
                value={item.title}
            </ActionInput>
          </ActionBox>
        </li>
      )
    })
    }
  </ActionContainer>
);


export default ActionList;