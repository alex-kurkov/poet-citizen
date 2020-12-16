import React from 'react';
import styled from 'styled-components/macro';
/* import PropTypes from 'prop-types'; */

const LeadBlock = styled.section`
  max-width: 1200px;
  height: 700px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: gray;
  padding: 100px 100px;
  
`;

const Lead = ({ children }) => (
  <LeadBlock>
    {children}
  </LeadBlock>
)

Lead.propTypes = {
};

export default Lead;
