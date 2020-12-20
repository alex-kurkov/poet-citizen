import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import config from '../config';
import SelectionForm from './Forms/SelectionForm';
import Carousel from 'react-elastic-carousel';
import FormArrowBtn from './Buttons/FormArrowBtn';
import Success from './Success';
import { useHistory } from 'react-router-dom';
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
  setUserPoemZero,
  setUserPoemOne,
  setUserPoemTwo,
  poem,
  setLeadTitle,
  setLeadHelperText,
  setLeadInfoText,
  setLeadNav,
  setLeadPoemBlockVisibility,
  route,
}) => {
  const history = useHistory();
  const { rhymes } = config;
  const carousel = useRef();

  let texts;
  switch (route) {
    case '/call':
      texts = config.leadTexts.routeCall;
      break;
    case '/join':
      texts = config.leadTexts.routeJoin;
      break;
    case '/explore':
      texts = config.leadTexts.routeExplore;
      break;
    case '/complain':
      texts = config.leadTexts.routeComplain;
      break;
    default: 
      console.log('no correct route passed to component Call')
  }

  const [currentStep, setCurrentStep] = useState(1);


  useEffect(() => {
    setUserPoemZero(texts.rhyme);
    setLeadTitle(texts.title);
    setLeadHelperText(texts.helper);
    setLeadInfoText(texts.info);
    setLeadNav(texts.nav)
    return () => {
      setUserPoemZero('')
      setLeadPoemBlockVisibility(true);
    };
  } ,[])
  useEffect(() => {
    switch(currentStep) {
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
  } ,[ currentStep ])

  const ClearPoem = () => {
    setUserPoemZero('');
    setUserPoemOne('');
    setUserPoemTwo('');
  }

/*   carousel.current.slideNext()
 */
  const handleOrganizationSelection = (e) => {
    setUserPoemOne(e.currentTarget.value);
  }

  const handleEmotionSelection = (e) => {
    setUserPoemTwo(e.currentTarget.value);
  }


  return (
    <CallSection>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log(poem);
            ClearPoem();
            history.push('/main');
          }}>
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


              <SelectionForm 
                handleSelection={handleEmotionSelection}
                array={rhymes.emotion}
                areaName="emotion"/>

              <Success 
                poem={poem}
                actionBtnRoute="/call"
                actionBtnText="Предложи вигилантам сделать доброе дело" />

          </Carousel>
        </form>
    </CallSection>
  )
};

Call.propTypes = {
};

export default Call;
