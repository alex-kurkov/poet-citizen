import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Carousel from 'react-elastic-carousel';
import { FormArrowBtnLead } from './Buttons/FormArrowBtn';
import Slide from './Slide';


const LeadSection = styled.section`
  background: #212228;
  height: 636px;
  width: 100%;
  background: url(${(props) => props.leadBg});
  transition: background .3s ease-in-out;
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

const Lead = ({ crumbsMethods, bgArray }) => {

  const [leadBg, setLeadBg] = useState(bgArray[0]);

  const handleSlideChange = (item, idx) => {
    setLeadBg(bgArray[idx]);
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
  crumbsMethods: PropTypes.object.isRequired,
  bgArray: PropTypes.array,
};

export default Lead;
