/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import { FormArrowBtn } from './Buttons/FormArrowBtn';
import config from '../config';

const OtherInitiativeSection = styled.section`
  width: 1440px;
  min-height: calc(100vh - 732px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #f2f2f2;
  color: #212228;
  padding: 100px 100px;
`;

const OtherInitiative = ({crumbsMethods, currentUser, cards, onCardLike, onCardDislike }) => {
  const { rhymes } = config;
  const allOrganization = rhymes.organization;
  useEffect(() => {
    crumbsMethods['/explore']();
    return () => crumbsMethods['/main']();
  }, []);
  return (
    <OtherInitiativeSection>
      <Carousel
        showArrows={true}
        pagination={true}
        itemsToShow={3}
        enableSwipe={true}
        itemsToScroll={3}
        renderArrow={FormArrowBtn}
      >
        {cards.map((card, idx) => <
          Card key={`${idx}-${card._id}`}
          card={card}
          allOrganization={allOrganization}
          currentUser={currentUser}
          onCardLike={onCardLike}
          onCardDislike={onCardDislike}
        />)}
      </Carousel>
    </OtherInitiativeSection>
  );
};

OtherInitiative.propTypes = {
};

export default OtherInitiative;
