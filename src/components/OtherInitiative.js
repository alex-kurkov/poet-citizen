/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components/macro';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import FormArrowBtn from './Buttons/FormArrowBtn';

const OtherInitiativeSection = styled.section`
  width: 1440px;
  height: calc(100vh - 700px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  padding: 100px 100px;
`;

const onCardLike = () => {
  console.log('like+1');
};

const onCardDislike = () => {
  console.log('dislike-1');
};

const OtherInitiative = (props) => {
  return (
    <OtherInitiativeSection>
      <Carousel
        showArrows={true}
        pagination={true}
        itemsToShow={3}
        enableSwipe={true}
        renderArrow={FormArrowBtn}
      >
        {props.cards.map((card) => <
          Card key={card._id}
          card={card}
          onCardLike={onCardLike}
          onCardDisLike={onCardDislike}
        />)}
      </Carousel>
    </OtherInitiativeSection>
  );
};

OtherInitiative.propTypes = {
};

export default OtherInitiative;
