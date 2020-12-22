import React from 'react';
import styled from 'styled-components/macro';
import LikeButton2 from './Buttons/LikeButton2';
import DislikeButton from './Buttons/DislikeButton';

const CardElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  width: 360px;
  height: 676px;
`;

const CardElementContainerDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  background: #ebebeb;
`;

const CardElementImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const CardElementData = styled.p`
  position: absolute;
  bottom: 12px;
  right: 8px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  z-index: 1;
  margin-bottom: 0;
  margin-top: 0;
`;

const CardElementRhymeDiv = styled.div`
  width: 100%;
  height: 420px;
  padding: 40px 16px;
  background: #b5b5b5;
  box-sizing: border-box;
  overflow-y: auto;
`;

const CardElementRhyme = styled.p`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
`;

const CardElementMarkDiv = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  background: #ebebeb;
`;

const CardElementMarkVertLine = styled.div`
  height: calc(100% - 8px);
  position: absolute;
  left: 50%;
  top: 4px;
  border-left: 1px solid #000000;
`;

const CardElementLikeGroupDiv = styled.div`
  display: flex;
  align-items: center;
`;

const CardElementLikeSum = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  margin: 0 0 0 20px;
`;


const Card = (props) => {
  // const currentUser = React.useContext(CurrentUserContext);
  const { card } = props;

  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleDislikeClick() {
    props.onCardDisLike(card);
  }

  return (
    <CardElementDiv>
      <CardElementContainerDiv>
        <CardElementImg src={card.link} alt={card.alt} />
        <CardElementData>{card.date}</CardElementData>
      </CardElementContainerDiv>
      <CardElementRhymeDiv>
        <CardElementRhyme>{card.rhyme}</CardElementRhyme>
      </CardElementRhymeDiv>
      <CardElementMarkDiv>
        <CardElementLikeGroupDiv>
          <LikeButton2 onClick={handleLikeClick} liked={true} />
          <CardElementLikeSum>{card.likes.length}</CardElementLikeSum>
        </CardElementLikeGroupDiv>
        <CardElementMarkVertLine></CardElementMarkVertLine>
        <CardElementLikeGroupDiv>
          <DislikeButton onClick={handleDislikeClick} liked={false} />
          <CardElementLikeSum>{card.dislikes.length}</CardElementLikeSum>
        </CardElementLikeGroupDiv>
      </CardElementMarkDiv>
    </CardElementDiv>
  );
};

export default Card;
