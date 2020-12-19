import React from 'react';
import styled from 'styled-components/macro';

const ActiveContainer = styled.ul`
 // margin: 0 auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
`;


const ActiveItem = styled.p`
font-family: Georgia;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 34px;
margin-top: 0;
margin-bottom: 0;
`;

const ActiveList = ({ array }) => (
  <ActiveContainer>
    {array.map((item, i) => {
      return (
        <li key={i}>
          <ActiveItem>
            {i + 1}.  {item}
          </ActiveItem>
        </li>
      )
    })
    }
  </ActiveContainer>
);


export default ActiveList;