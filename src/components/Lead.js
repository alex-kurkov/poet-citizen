import React from 'react';
import styled from 'styled-components/macro';
import Poem from './Poem';
import LeadInfo from './LeadInfo';
/* import PropTypes from 'prop-types'; */

const LeadSection = styled.section`
  width: 1440px;
  height: 636px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #C4C4C4;
  padding: 105px 252px 75px 252px;
`;

const LeadBlock = styled.div`
  width: 936px;
  color: #000;
  height: 100%;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  gap: 120px;
`

const Lead = ({ children }) => (
  <LeadSection>
    <LeadBlock>
      <Poem poem={`“Граждане,
у меня
огромная радость.
Разулыбьте
сочувственные лица.
Мне
обязательно
поделиться надо,
стихами
хотя бы
поделиться...”
`}/>
    <LeadInfo
      leadMainText="Предложи свою инициативу вигилантам словами классиков"
      leadText="P.S. 'Вигиланты' (люди, которые самовольно охраняют общественный порядок)"
    />
      {children}
    </LeadBlock>
  </LeadSection>
)

Lead.propTypes = {
};

export default Lead;
