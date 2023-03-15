import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import AppContext from '../contexts/AppContext';
import { NavBarLink } from './Texts';
/* import PropTypes from 'prop-types'; */

const StyledLinksBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {

  }

  @media screen and (max-width: 440px) {

  }
`;
const LinksContainer = styled.ul`
  color: inherit;
  height: 32px;
  width: 100%;
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

const LinksBar = ({crumbsMethods}) => {
  const { navBarLinks } = React.useContext(AppContext);
  return (
    <StyledLinksBar>
      <LinksContainer>
        {navBarLinks.map(({ link, name }, i) => (
          <LiItem key={`navbar-${i}`}>
            <NavBarLink onClick={() => crumbsMethods[link]()} as={Link} to={link}>{name}</NavBarLink>
          </LiItem>))
        }
      </LinksContainer>
    </StyledLinksBar>
  );
};

LinksBar.propTypes = {
};

export default LinksBar;
