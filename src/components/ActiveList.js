import React from 'react';
import styled from 'styled-components/macro';

const ActiveContainer = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
`;
const ActiveItemDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const ActiveLiStyled = styled.li`
margin-bottom: 24px;
 &:last-child {
    margin-bottom: 0;
  }
`;

const ActiveItem = styled.p`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  margin: 0 0 0 12px;
`;

const ActiveItemNumber = styled.p`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 34px;
  color: #FF7A00;
  margin-top: 0;
  margin-bottom: 0;
`;

const ActiveList = ({ array }) => (
  <ActiveContainer>
    {array.map((item, i) => (
        <ActiveLiStyled key={`activity-${i}`}>
          <ActiveItemDiv>
            <ActiveItemNumber>{i + 1}.</ActiveItemNumber>
            <ActiveItem>{item}</ActiveItem>
          </ActiveItemDiv>
        </ActiveLiStyled>
    ))}
  </ActiveContainer>
);

export default ActiveList;
