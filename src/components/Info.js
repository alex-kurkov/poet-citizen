import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
/* import PropTypes from 'prop-types'; */
import IcQuote from './IcQuote';
import config from '../config';
import OrganizationList from './OrganizationList';
import ActionList from './ActionList';
import ActiveList from './ActiveList';
import ActionBtn from './ActionButton';
import {
  IntroGoal, ActiveTitle, IntroParticipationText, IntroBrief, IntroParagraf, IntroTitleDiv, IntroGoalDiv,
} from './Texts';

const InfoBlock = styled.section`
  width: 1440px;
  height: calc(100vh - 700px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  padding: 100px 100px;
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

const Info = () => {
  const history = useHistory();
  const { rhymes, infoTexts } = config;
  const { activitiesInfo, introGoal, intro } = infoTexts;

  const actionArray = [
    { title: 'Предложите свою инициативу', id: 'callOwn', link: '/call' },
    { title: 'Станьте частью движения', id: 'joinMovement', link: '/join' },
    {
      title: 'Оцените инициативы других',
      id: 'exploreOther',
      link: '/explore',
    },
  ];

  return (
    <InfoBlock>
      <IntroBrief>Предисловие</IntroBrief>
      <IntroDiv>
      {intro.map((item, i) => (
        <IntroParagraf key={`intropar-${i}`}>{item}</IntroParagraf>
      ))}

        <IntroGoalDiv>
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
      <ActionList array={actionArray} />
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
            text={'Предложи вигилантам сделать доброе дело'}
            textSpan={''}
            handleRedirect={() => {
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
