import React from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

const StyledLinksBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;

  @media screen and (max-width: 767px) {

  }

  @media screen and (max-width: 440px) {

  }
`;
const LinksContainer = styled.ul`
  color: inherit;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 440px) {
  }
`;
const LiItem = styled.li`
  color: inherit;
  list-style-type: none;
  margin: 0 0;
  padding: 0 4px;
`;
const NavBarLink = styled(Link)`
  display: block;
  padding: 8px 20px;
  color: #000;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  border: none;
  box-sizing: border-box;
  padding: 0 16px;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: .6;
  }
  @media screen and (max-width: 767px) {
  }
  
  @media screen and (max-width: 440px) {
  }
`;

const LinksBar = () => {
  const { navBarLinks } = React.useContext(AppContext);
  return (
    <StyledLinksBar>
      <LinksContainer>
        {navBarLinks.map(({ link, name }, i) => (
          <LiItem key={`navbar-${i}`}>
            <NavBarLink to={link}>{name}</NavBarLink>
          </LiItem>))
        }
      </LinksContainer>
    </StyledLinksBar>
  );
};

LinksBar.propTypes = {
};

export default LinksBar;