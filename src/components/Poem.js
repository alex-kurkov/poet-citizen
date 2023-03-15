import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { PoemText } from './Texts';
import IcQuote from './IcQuote';

const PoemBlock = styled.div`
  width: 35%;
  margin-left: 12px;
  height: 480px;
  position: relative;
  background: none;
  border-radius: 2px;
  padding: 52px 32px;
  background-color: rgba(242, 242, 242, .25);
  box-sizing: border-box;
  backdrop-filter: blur(5px);
`;
const IcQuotesWrap = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0px;
  left: -12px;
  border-radius: 50%;
  background: none;
`;

const Poem = ({ poem }) => (
    <PoemBlock>
      <IcQuotesWrap>
          <IcQuote fill="#FF7A00"/>
      </IcQuotesWrap>
        <PoemText>
          {poem}
        </PoemText>
    </PoemBlock>
);
Poem.propTypes = {
  poem: PropTypes.string,
};

export default Poem;
