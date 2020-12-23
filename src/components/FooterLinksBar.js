import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import AppContext from '../contexts/AppContext';
import { FooterLink } from './Texts';

const FooterStyledLinksBar = styled.nav`
  box-sizing: border-box;
  height: 100%;
  padding: 0;

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 440px) {
  }
`;

const FooterLinksContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 28px);
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 12px;
  grid-column-gap: 24px;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 440px) {
  }
`;

const FooterLiItem = styled.li`
  color: inherit;
  list-style-type: none;
  margin: 0 0;
  padding: 0 4px;
`;

const FooterLinksBar = () => {
  const { navBarLinks } = React.useContext(AppContext);
  return (
    <FooterStyledLinksBar>
      <FooterLinksContainer>
        {navBarLinks.map(({ link, name }, i) => (
          <FooterLiItem key={`footernavbar-${i}`}>
            <FooterLink as={Link} to={link}>
              {name}
            </FooterLink>
          </FooterLiItem>
        ))}
      </FooterLinksContainer>
    </FooterStyledLinksBar>
  );
};

FooterLinksBar.propTypes = {};

export default FooterLinksBar;
