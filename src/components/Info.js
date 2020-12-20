import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
/* import PropTypes from 'prop-types'; */
import IcQuote from "./IcQuote";
import config from "../config";
import OrganizationList from "./OrganizationList";
import ActionList from "./ActionList";
import ActiveList from "./ActiveList";
import ActionBtn from "./ActionButton";
import { IntroGoal } from './Texts';

const InfoBlock = styled.section`
  width: 1440px;
  height: calc(100vh - 700px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  padding: 100px 100px;
`;

const IntroBrief = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  margin-top: 0;
  margit-bottom: 0;
`;

const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;

const IntroParagraf = styled.p`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 20px;
  width: 90%;

  tab-size: 12px;
`;

const IntroGoalDiv = styled.div`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 34px;
  width: 70%;
  display: flex;
  position: relative;
  margin-top: 32px;
  background: #eee;
  padding: 12px 48px;
  box-sizing: border-box;
`;

const IntroTitleDiv = styled.p`
  max-width: 648px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  margin-top: 108px;
  margin-bottom: 36px;
 `;

const IntroTitleSpan = styled.span`
color: #ff7a00;
`;

const IntroParticipationText = styled.p`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  margin-top: 44px;
  margin-bottom: 0;
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

const ActiveTitle = styled.p`
  margin: 88px 0 36px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 45px;
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
/*   const activeArray = [
    "Распространение наркотиков и наркозависимость",
    "Незаконная продажа алкоголя",
    "Пьяное вождение, нарушение ПДД и правил парковки",
    "Просроченные продукты и прочие нарушения потребительских прав граждан",
    "Распитие спиртных напитков и курение в «неположенных местах»",
    "«Майдан», угроза «цветных» революций",
    "Педофилия и незаконные мигранты(были популярны до разгрома «Реструкта»)",
    "«Экстремизм» в интернете",
    "Редко встречающаяся тематика: аборты, незаконный сбор пожертвований, борьба с сектами, борьба за нравственность",
  ]; */

  const actionArray = [
    { title: "Предложите свою инициативу", id: "callOwn", link: "/call" },
    { title: "Станьте частью движения", id: "joinMovement", link: "/join" },
    {
      title: "Оцените инициативы других",
      id: "exploreOther",
      link: "/explore",
    },
  ];

  return (
    <InfoBlock>
      <IntroBrief>Предисловие</IntroBrief>
      <IntroDiv>
      {infoTexts.intro.map((item, i) => (<IntroParagraf>{item}</IntroParagraf>))}

        <IntroGoalDiv>
          <IcQuotesWrap>
              <IcQuote fill="#FF7A00" />
          </IcQuotesWrap>

          <IntroGoal>{infoTexts.introGoal}</IntroGoal>
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
          <ActiveList array={rhymes.organization} />

          <ActionBtn
            text={"Предложи вигилантам сделать доброе дело"}
            textSpan={""}
            handleRedirect={() => {
              history.push("/call");
            }}
          />
        </ActiveListDiv>
      </ActiveDiv>
    </InfoBlock>
  );
};

Info.propTypes = {};

export default Info;
