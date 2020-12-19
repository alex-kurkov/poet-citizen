import React from 'react';
import styled from 'styled-components/macro';
/* import PropTypes from 'prop-types'; */
import IcQuote from './IcQuote';
import config from '../config';
import OrganizationList from './OrganizationList';
import ActionList from './ActionList';
import ActiveList from './ActiveList';

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
`;

const IntroBrief = styled.p`
  `;

const IntroParagraf = styled.p`
  `;

const IntroGoal = styled.p`
  `;

const IntroTitleDiv = styled.p`
max-width: 648px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 52px;
  `;

const ActiveTitle = styled.p`
margin-top: 88px;
margin-bottom: 36px;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 45px;
  `;

const IcQuotesDiv = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  left: -50px;
  border-radius: 50%;
  background-color: #DEDEDE;
  color: #000;
`;

const IcQuotesWrap = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  padding: 25px;
`;

const Info = ({ children }) => {
  const { rhymes } = config;

  const activeArray = [
    'Распространение наркотиков и наркозависимость',
    'Незаконная продажа алкоголя',
    'Пьяное вождение, нарушение ПДД и правил парковки',
    'Просроченные продукты и прочие нарушения потребительских прав граждан',
    'Распитие спиртных напитков и курение в «неположенных местах»',
    '«Майдан», угроза «цветных» революций',
    'Педофилия и незаконные мигранты(были популярны до разгрома «Реструкта»)',
    '«Экстремизм» в интернете',
    'Редко встречающаяся тематика: аборты, незаконный сбор пожертвований, борьба с сектами, борьба за нравственность'
  ];

  const actionArray = [
    { title: 'Предложите свою инициативу', id: 'ownInitativ'},
    { title: 'Станьте частью движения', id: 'partOfMotion'},
    { title: 'Оцените инициативы других', id: 'evaluateOtherInitiative'},
  ];

  return (
    <InfoBlock>

      <IntroDiv>
        <IntroBrief>Предисловие</IntroBrief>
        <IntroParagraf>Сейчас вигилантские общества получили ширкое распространение в России. Это здорово, когда люди объединияются в мощные сообщества и поддерживают баланс справедливости со стороны граждан и правоохранительных органов.</IntroParagraf>
        <IntroParagraf>Но, к сожалению, вигилантские движения плохо развиты, и зачастую их поведение становится камнем преткновения для популяризации этой культуры.</IntroParagraf>
        <IcQuotesDiv>
          <IcQuotesWrap>
            <IcQuote fill="#FF7A00" />
          </IcQuotesWrap>
        </IcQuotesDiv>
        <IntroGoal>Данный портал создан для развития вигилантской идеалогии и регулирования ее действий в социуме. Сейчас мы находимся на пути, когда хорошая идея получает развитие!</IntroGoal>
      </IntroDiv>

      <IntroTitleDiv>Как Вы можете принять участие в регулировании общественного порядка?</IntroTitleDiv>
      <ActionList array={actionArray} />
      <IntroTitleDiv>Вигилантские движения, действующие на территории России</IntroTitleDiv>
      <OrganizationList array={rhymes.organization} />

      <ActiveTitle>Активность вигилантов сконцентрирована вокруг нескольких общественных пороков:</ActiveTitle>
      <ActiveList array={activeArray} />
    </InfoBlock>
  )
};

Info.propTypes = {
};

export default Info;
