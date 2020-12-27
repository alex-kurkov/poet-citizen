import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import Carousel from 'react-elastic-carousel';
import { FormArrowBtnLead } from './Buttons/FormArrowBtn';
import Slide from './Slide';
import AppContext from '../contexts/AppContext';
/* import PropTypes from 'prop-types'; */

const LeadSection = styled.section`
  background: #212228;
  height: 636px;
  width: 100%;
  background: url(${(props) => props.leadBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LeadWrap = styled.div`
  width: 1440px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 60px 24px;
`;

const Lead = ({ crumbsMethods }) => {
  const config = useContext(AppContext);
  const { bgArray } = config;

  const [leadBg, setLeadBg] = useState(bgArray[0]);
  const handleSlideChange = (item, idx) => {
    setLeadBg(bgArray[idx]);
    console.log(bgArray[idx]);
  }
  
  return (
    <LeadSection leadBg={leadBg}>
      <LeadWrap>
      <Carousel
          easing="ease-in-out"
          onChange={handleSlideChange}
          showArrows={true}
          pagination={true}
          itemsToShow={1}
          enableSwipe={true}
          renderArrow={FormArrowBtnLead}
          disableArrowsOnEnd={false}
        >
        <Slide crumbsMethods={crumbsMethods} currentSlide="1" />
        <Slide crumbsMethods={crumbsMethods} currentSlide="2" />
        <Slide crumbsMethods={crumbsMethods} currentSlide="3" />
        <Slide crumbsMethods={crumbsMethods} currentSlide="4" />
  
      </Carousel>
      </LeadWrap>
    </LeadSection>
  );
};

Lead.propTypes = {
};

export default Lead;
