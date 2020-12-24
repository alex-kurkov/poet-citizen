import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Carousel from 'react-elastic-carousel';
import config from '../config';
import SelectionForm from './Forms/SelectionForm';
import SelectionFormEmotion from './Forms/SelectionFormEmotion';
import FormArrowBtn from './Buttons/FormArrowBtn';
import Success from './Success';
/* import PropTypes from 'prop-types'; */

const CallSection = styled.section`
  width: 1440px;
  min-height: 600px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  padding: 32px 64px;
  color: black;
`;

const Call = ({
  setUserOrganizationId,
  setUserPoemZero,
  setUserPoemOne,
  setUserPoemTwo,
  poem,
  setLeadTitle,
  setLeadHelperText,
  setLeadInfoText,
  setLeadNav,
  setLeadPoemBlockVisibility,
  handleCallSubmit,
  
}) => {
  const { rhymes } = config;
  const carousel = useRef();

  const texts = config.leadTexts.routeCall;

  const [currentStep, setCurrentStep] = useState(1);

  const clearPoem = () => {
    setUserPoemZero('');
    setUserPoemOne('');
    setUserPoemTwo('');
  };

  useEffect(() => {
    setUserPoemZero(texts.rhyme);
    setLeadTitle(texts.title);
    setLeadHelperText(texts.helper);
    setLeadInfoText(texts.info);
    setLeadNav(texts.nav);
    return () => {
      clearPoem();
      setLeadPoemBlockVisibility(true);
    };
  }, []);
  useEffect(() => {
    switch (currentStep) {
      case 1:
        setLeadTitle(texts.title);
        setLeadHelperText(texts.helper);
        setLeadInfoText(texts.info);
        setLeadNav(texts.nav);
        setLeadPoemBlockVisibility(true);
        break;
      case 2:
        setLeadTitle(texts.title_step2);
        setLeadInfoText(texts.info_step2);
        setLeadNav(texts.nav_step2);
        setLeadHelperText(texts.helper);
        setLeadPoemBlockVisibility(true);
        break;
      case 3:
        setLeadTitle(texts.title_step3);
        setLeadInfoText(texts.info_step3);
        setLeadHelperText('');
        setLeadNav(texts.nav_step3);
        setLeadPoemBlockVisibility(false);
        break;
      default:
        setLeadTitle(texts.title);
    }
  }, [currentStep]);

  /*   carousel.current.slideNext()
 */
  const handleOrganizationSelection = (e) => {
    setUserOrganizationId(e.currentTarget.id);
    setUserPoemOne(e.currentTarget.value);
  };

  const handleEmotionSelection = (e) => {
    setUserPoemTwo(e.currentTarget.value);
  };

  return (
    <CallSection>
        <form
          onSubmit={handleCallSubmit}>
          <Carousel
            showArrows={true}
            pagination={true}
            ref={carousel}
            onChange={(item, idx) => setCurrentStep(idx + 1)}
            itemsToShow={1}
            enableSwipe={true}
            renderArrow={FormArrowBtn}
            >

              <SelectionForm
                handleSelection={handleOrganizationSelection}
                array={rhymes.organization}
                areaName="organization"/>

              <SelectionFormEmotion
                handleSelection={handleEmotionSelection}
                array={rhymes.emotion}
                areaName="emotion"/>

              <Success
                poem={poem}
                actionBtnRoute="/explore"
                actionBtnText="А другие инициативы ты уже оценил?" />

          </Carousel>
        </form>
    </CallSection>
  );
};

Call.propTypes = {
};

export default Call;
