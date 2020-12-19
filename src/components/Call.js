import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import config from '../config';
import SelectionForm from './Forms/SelectionForm';
import Carousel from 'react-elastic-carousel';
/* import FormArrowBtn from './Buttons/FormArrowBtn'; */
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
}) => {
  const history = useHistory();
  const { rhymes } = config;
  const carousel = useRef();
  const texts = config.leadTexts.routeCall;

  useEffect(() => {
    setUserPoemZero(texts.rhyme);
    setLeadTitle(texts.title);
    setLeadHelperText(texts.helper);
    setLeadInfoText(texts.info);
    setLeadNav(texts.nav)
    return () => setUserPoemZero('');
  } ,[])

  const ClearPoem = () => {
    setUserPoemZero('');
    setUserPoemOne('');
    setUserPoemTwo('');
  }

  const handleOrganizationSelection = (e) => {
    setUserPoemOne(e.currentTarget.value);
    setTimeout(() => {
      carousel.current.slideNext()
      setLeadTitle(texts.title_step2);
      setLeadInfoText(texts.info_step2);
      setLeadNav(texts.nav_step2);
    }, 2000);
  }
  const handleEmotionSelection = (e) => {
    setUserPoemTwo(e.currentTarget.value);
    setTimeout(() => {
      carousel.current.slideNext()
      setLeadTitle(texts.title_step3);
      setLeadInfoText(texts.info_step3);
      setLeadHelperText('');
      setLeadNav(texts.nav_step3);
      setLeadPoemBlockVisibility(false);
    }, 2000);
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
            showArrows={false}
            pagination={false}
            ref={carousel}
            itemsToShow={1}
            itemPadding={[0, 10]}
            enableSwipe={false}
/*             renderArrow={FormArrowBtn} */
            >

              <SelectionForm 
                handleSelection={handleOrganizationSelection}
                array={rhymes.organization}
                areaName="organization"/>


              <SelectionForm 
                handleSelection={handleEmotionSelection}
                array={rhymes.emotion}
                areaName="emotion"/>

              <Success poem={poem}>

              </Success>

          </Carousel>
        </form>
    </CallSection>
  )
};

Call.propTypes = {
};

export default Call;
