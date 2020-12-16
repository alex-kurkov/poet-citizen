import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { PoemText } from './Texts';

const PoemBlock = styled.div`
  width: 264px;
  height: 456px;
  position: relative;
  background-color: white;
  padding: 52px 32px;
  box-sizing: border-box;
`
const IcQuotes = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  left: -50px;
  border-radius: 50%;
  background-color: #DEDEDE;
  color: #000;
`
const Poem = ({ poem }) => {
  return (
    <PoemBlock>
      <IcQuotes/>
        <PoemText>
          {poem}
        </PoemText>
    </PoemBlock>
  )
}
Poem.propTypes = {
  poem: PropTypes.string,
};

export default Poem;
