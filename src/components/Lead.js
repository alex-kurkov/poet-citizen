import React from 'react';
import styled from 'styled-components/macro';
import leadBG from '../img/mainlead.jpg';
import Carousel from 'react-elastic-carousel';
import {FormArrowBtnLead} from './Buttons/FormArrowBtn';
import Slide from './Slide'
/* import PropTypes from 'prop-types'; */

const LeadSection = styled.section`
  background: #212228;
  height: 636px;
  width: 100%;
  background: url(${leadBG});
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

const Lead = () => {
  return (
    <LeadSection>
      <LeadWrap>
      <Carousel
          easing="ease-in-out"
          showArrows={true}
          pagination={true}
          itemsToShow={1}
          enableSwipe={true}
          renderArrow={FormArrowBtnLead}
          disableArrowsOnEnd={false}
        >
        <Slide currentSlide="1" />
        <Slide currentSlide="2" />
        <Slide currentSlide="3" />
        <Slide currentSlide="4" />
  
      </Carousel>
      </LeadWrap>
    </LeadSection>
  );
};

Lead.propTypes = {
};

export default Lead;
