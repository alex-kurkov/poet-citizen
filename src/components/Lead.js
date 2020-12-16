import React from 'react';
import styled from 'styled-components/macro';
import Poem from './Poem';
/* import PropTypes from 'prop-types'; */

const LeadBlock = styled.section`
  width: 1440px;
  height: 636px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #C4C4C4;
  padding: 105px 252px 75px 252px;
`;

const LeadInfo = styled.div`
  width: 936;
  background-color: lightGray;
  color: #000;
  height: 100%;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
`

const Lead = ({ children }) => (
  <LeadBlock>
    <LeadInfo>
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
      {children}
    </LeadInfo>
  </LeadBlock>
)

Lead.propTypes = {
};

export default Lead;
