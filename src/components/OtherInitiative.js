/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components/macro';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import FormArrowBtn from './Buttons/FormArrowBtn';
import config from '../config';

const OtherInitiativeSection = styled.section`
  width: 1440px;
  min-height: calc(100vh - 700px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  padding: 100px 100px;
`;

const OtherInitiative = ({ currentUser, cards, onCardLike, onCardDislike }) => {
  const { rhymes } = config;
  const allOrganization = rhymes.organization;

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
