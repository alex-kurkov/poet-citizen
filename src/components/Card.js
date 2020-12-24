import React from 'react';
import styled from 'styled-components/macro';
import LikeButton2 from './Buttons/LikeButton2';
import DislikeButton from './Buttons/DislikeButton';
import organizationBg from '../img/organization_bg.png';

const CardElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  background-color: #000;
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
  background: #f2f2f2;
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
  padding: 24px 16px;
  background: #f2f2f2;
  box-sizing: border-box;
`;

const RhymeWrap = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: none;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 6px;
    border: 1px solid green;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    opacity: 0.8;
    border-radius: 3px;
  }
`;

const CardElementRhyme = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 8px 0 0;
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
  background: #000;
`;

const CardElementMarkVertLine = styled.div`
  height: calc(100% - 8px);
  position: absolute;
  left: 50%;
  top: 4px;
  border-left: 1px solid #43d3b2;
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
  color: #f2f2f2;
  margin: 0 0 0 20px;
`;

const Card = ({
  currentUser,
  onCardLike,
  onCardDislike,
  card,
  allOrganization,
}) => {
  const { rhyme, link, likes, dislikes, createdAt } = card;

  const liked = likes.some((item) => item._id === currentUser._id);
  const disliked = dislikes.some((item) => item._id === currentUser._id);
  const organization = allOrganization.filter(
    (item) => item.id === card.organization
  );
  const organizationLink =
    organization.length === 0 ? organizationBg : organization[0].image;

  return (
    <CardElementDiv>
      <CardElementContainerDiv>
        <CardElementImg src={organizationLink} alt='Изображение инициативы' />
        <CardElementData>{createdAt}</CardElementData>
      </CardElementContainerDiv>
      <CardElementRhymeDiv>
        <RhymeWrap>
          <CardElementRhyme>{rhyme}</CardElementRhyme>
        </RhymeWrap>
      </CardElementRhymeDiv>
      <CardElementMarkDiv>
        <CardElementLikeGroupDiv>
          <LikeButton2
            onClick={() => onCardLike(card)}
            liked={liked}
            currentUser={currentUser}
          />
          <CardElementLikeSum>{likes.length}</CardElementLikeSum>
        </CardElementLikeGroupDiv>
        <CardElementMarkVertLine />
        <CardElementLikeGroupDiv>
          <DislikeButton
            onClick={() => onCardDislike(card)}
            disliked={disliked}
            currentUser={currentUser}
          />
          <CardElementLikeSum>{dislikes.length}</CardElementLikeSum>
        </CardElementLikeGroupDiv>
      </CardElementMarkDiv>
    </CardElementDiv>
  );
};

export default Card;
