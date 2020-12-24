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

const ActiveItem = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  margin: 0 0 0 12px;
`;

const ActiveItemNumber = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 34px;
  color: #ff7a00;
  margin-top: 0;
  margin-bottom: 0;
`;

const ActiveList = ({ array }) => (
  <ActiveContainer>
    {array.map((item, i) => (
        <li key={`activity-${i}`}>
          <ActiveItemDiv>
            <ActiveItemNumber>{i + 1}.</ActiveItemNumber>
            <ActiveItem>{item}</ActiveItem>
          </ActiveItemDiv>
        </li>
    ))}
  </ActiveContainer>
);

export default ActiveList;
