import React from 'react';
import styled from 'styled-components/macro';

const OrganizationContainer = styled.ul`
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

const OrganizationBox = styled.div`
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

const OrganizationItem = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;
margin-top: 0;
margin-bottom: 20px;
`;

const OrganizationList = ({ array }) => (
  <OrganizationContainer>
    { array.map((item, i) => {
      return (
        <li key={i + item.id}>
          <OrganizationBox>
            <OrganizationItem>
              {item.name}
            </OrganizationItem>
          </OrganizationBox>
        </li>
      )
    })
    }
  </OrganizationContainer>
);


export default OrganizationList;