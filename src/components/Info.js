import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
/* import PropTypes from 'prop-types'; */
import IcQuote from './IcQuote';
import config from '../config';
import OrganizationList from './OrganizationList';
import ActionList from './ActionList';
import ActiveList from './ActiveList';
import ActionBtn from './Buttons/ActionButton';
import {
  IntroGoal, ActiveTitle, IntroParticipationText, IntroBrief, IntroParagraf, IntroTitleDiv, IntroGoalDiv,
} from './Texts';
import {
  callImg,
  joinImg,
  exploreImg,
} from '../utils/imagesAction'

const InfoBlock = styled.section`
  width: 1440px;
  min-height: calc(100vh - 896px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #f2f2f2;
  color: #212228;
  padding: 100px 100px 290px 100px;
`;


const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;

const IntroTitleSpan = styled.span`
  color: #ff7a00;
`;

const ActiveDiv = styled.div`
  margin-left: 36px;
`;

const ActiveListDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 840px;
`;

const IcQuotesWrap = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: 50%;
  color: #000;
`;

const Info = ({ crumbsMethods }) => {
  const history = useHistory();
  const { rhymes, infoTexts } = config;
  const { activitiesInfo, introGoal, intro } = infoTexts;
  useEffect(() => {
    crumbsMethods['/main']();
  }, []);

  const actionArray = [
    {
      title: ['Предложите', 'свою', 'инициативу'],
      id: 'callOwn',
      link: '/call',
      image: callImg
    },
    {
      title: ['Станьте', 'частью', 'движения'],
      id: 'joinMovement',
      link: '/join',
      image: joinImg },
    {
      title: ['Оцените', 'инициативы', 'других'],
      id: 'exploreOther',
      link: '/explore',
      image: exploreImg
    },
  ];

  return (
    <InfoBlock>
      <IntroBrief>Предисловие</IntroBrief>
      <IntroDiv>
      {intro.map((item, i) => (
        <IntroParagraf key={`intropar-${i}`}>{item}</IntroParagraf>
      ))}

        <IntroGoalDiv as="div">
          <IcQuotesWrap>
              <IcQuote fill="#FF7A00" />
          </IcQuotesWrap>

          <IntroGoal>{introGoal}</IntroGoal>
        </IntroGoalDiv>
      </IntroDiv>

      <IntroTitleDiv>
        Как <IntroTitleSpan>Вы</IntroTitleSpan> можете принять участие в
        регулировании общественного порядка?
      </IntroTitleDiv>
      <ActionList crumbsMethods={crumbsMethods} array={actionArray} />
      <IntroParticipationText>
        Чтобы принять участие, необходимо зарегистрироваться на нашем сайте.
      </IntroParticipationText>
      <IntroTitleDiv>
        Вигилантские движения, действующие на территории России
      </IntroTitleDiv>
      <OrganizationList array={rhymes.organization} />

      <ActiveDiv>
        <ActiveTitle>
          Активность вигилантов сконцентрирована вокруг нескольких общественных
          пороков:
        </ActiveTitle>
        <ActiveListDiv>
          <ActiveList array={activitiesInfo} />

          <ActionBtn
            handleRedirect={() => {
              crumbsMethods['/call']();
              history.push('/call');
            }}
          />
        </ActiveListDiv>
      </ActiveDiv>
    </InfoBlock>
  );
};

Info.propTypes = {};

export default Info;
