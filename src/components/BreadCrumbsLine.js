import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const CrumbsWrapper = styled.nav`
	display: inline-block;
  margin: 0;
  text-align: left;
  height: 24px;
  grid-area: nav;
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
  margin: 0 8px 0 4px;
  position: relative;
  padding: 0 4px;

  &:after {
    position: absolute;
    font-weight: 400;
    content: '/';
    right: -4px;
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
    <CrumbsWrapper>
      {
      crumbsStack
        .map((item, idx) => {
          return (<Crumb 
          onClick={() => {
            item.method()
          }} 
          id={`${idx}-${item.id}`}>
            {item.name}
          </Crumb>)
          })
      }
    </CrumbsWrapper>
);

BreadCrumbs.propTypes = {
  crumbsStack: PropTypes.node.isRequired,
};

export default BreadCrumbs;