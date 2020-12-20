import React from 'react';
import styled from 'styled-components/macro';

const InitiativContainer = styled.ul`
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
`;

const InitiativBox = styled.div`
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
`;

const InitiativItem = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;
margin-top: 0;
margin-bottom: 20px;
`;

const InitiativList = ({ array }) => (
  <InitiativContainer>
    { array.map((item, i) => (
        <li key={i + item.id}>
          <InitiativBox>
            <InitiativItem>
              {item.name}
            </InitiativItem>
          </InitiativBox>
        </li>
    ))
    }
  </InitiativContainer>
);

export default OrganizationList;
