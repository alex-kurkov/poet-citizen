import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Carousel from 'react-elastic-carousel';
import config from '../config';
import SelectionForm from './Forms/SelectionForm';
import SelectionFormEmotion from './Forms/SelectionFormEmotion';
import { FormArrowBtn }  from './Buttons/FormArrowBtn';
import Success from './Success';
/* import PropTypes from 'prop-types'; */

const CallSection = styled.section`
  width: 1440px;
  min-height: calc(100vh - 732px);
  box-sizing: border-box;
  margin: 0 auto;
  padding: 32px 64px;
  background-color: #f2f2f2;
  color: #212228;
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
  crumbsMethods,
}) => {
  const formS=useRef();
  const carousel = useRef();
  const { rhymes } = config;
  const texts = config.leadTexts.routeJoin;

  const [currentStep, setCurrentStep] = useState(1);
  const [organizationChecked, setOrganizationChecked] = useState(false);
  const [emotionChecked, setEmotionChecked] = useState(false);

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
    crumbsMethods['/join']();
    return () => {
      crumbsMethods['/main']();
      clearPoem();
      setLeadPoemBlockVisibility(true);
    };
  }, []);

  useEffect(() => {
    switch (currentStep) {
      case 1:
        crumbsMethods['/organization'](carousel);
        setLeadTitle(texts.title);
        setLeadHelperText(texts.helper);
        setLeadInfoText(texts.info);
        setLeadNav(texts.nav);
        setLeadPoemBlockVisibility(true);
        break;
      case 2:
        crumbsMethods['/emotion'](carousel);
        setLeadTitle(texts.title_step2);
        setLeadInfoText(texts.info_step2);
        setLeadNav(texts.nav_step2);
        setLeadHelperText(texts.helper);
        setLeadPoemBlockVisibility(true);
        break;
      case 3:
        crumbsMethods['/result'](carousel);
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

  const handleOrganizationSelection = (e) => {
    setUserPoemOne(e.currentTarget.value);
    setUserOrganizationId(e.currentTarget.id);
    const checkedOrganization = Array.from(formS.current.organization).some(i=>i.checked);
    setOrganizationChecked(checkedOrganization);
  };

  const handleEmotionSelection = (e) => {
    setUserPoemTwo(e.currentTarget.value);
    const checkedEmotion = Array.from(formS.current.emotion).some(i=>i.checked);
    setEmotionChecked(checkedEmotion);
  };

  return (
    <CallSection>
        <form
          ref={formS}
          onSubmit={handleCallSubmit}>
          <Carousel
            showArrows={true}
            pagination={false}
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
                crumbsMethods={crumbsMethods}
                organizationChecked={organizationChecked}
                emotionChecked={emotionChecked}
                poem={poem}
                actionBtnRoute="/call"
                actionBtnText="Предложи вигилантам сделать доброе дело" />

          </Carousel>
        </form>
    </CallSection>
  );
};

Call.propTypes = {
};

export default Call;
