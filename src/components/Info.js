import React from 'react';
import styled from 'styled-components/macro';
/* import PropTypes from 'prop-types'; */

const InfoBlock = styled.section`
  max-width: 1200px;
  height: calc(100vh - 700px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: black;
  color: white;
  padding: 100px 100px;
`;

const Info = ({children}) => (
  <InfoBlock>
    {children}
  </InfoBlock>
)

Info.propTypes = {
};

export default Info;
