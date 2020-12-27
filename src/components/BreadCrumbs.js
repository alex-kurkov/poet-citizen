import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const CrumbsSection = styled.section`
  width: 1440px;
  margin: 0 auto;
  heigth: 40px;
  padding: 0 80px;
`;
const CrumbsWrapper = styled.nav`
	display: flex;
	margin: auto;
`;

const Crumb = styled.button`
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  background: transparent;
  color: #43D3B2;
  border: none;
  transition: transform .3s ease-in-out;
  margin: 0 8px;
  position: relative;
  padding: 0 8px;

  &:after {
    position: absolute;
    font-weight: 700;
    content: '/';
    right: 0px;
    top: 0%;
  }
  &:hover {
    color: #FF7A00;
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
    transform: scale(1.1);
  }
`

const BreadCrumbs = ({ crumbsStack }) => (
  <CrumbsSection>
    <CrumbsWrapper>
      {
      crumbsStack
        .map((item, idx) => {
          return (<Crumb 
          onClick={() => {
            item.method()
          }} 
          key={`${idx}-${item.id}`}>
            {item.name}
          </Crumb>)
          })
      }
    </CrumbsWrapper>
  </CrumbsSection>
);

BreadCrumbs.propTypes = {
  crumbsStack: PropTypes.node,
};

export default BreadCrumbs;