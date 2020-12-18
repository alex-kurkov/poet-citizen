import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import config from '../config';
import SelectionForm from './Forms/SelectionForm';
import Carousel from 'react-elastic-carousel';
import FormArrowBtn from './Buttons/FormArrowBtn';
import Success from './Success';

/* import PropTypes from 'prop-types'; */


const CallSection = styled.section`
  width: 1440px;
  min-height: 600px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  border: red 1px solid;
  padding: 32px 64px;
  color: black;
`;

const Call = ({setUserPoemZero, setUserPoemOne, setUserPoemTwo, poem}) => {
  const { rhymes } = config;
  const carousel = useRef();
  
  useEffect(() => {
    setUserPoemZero(config.leadTexts.routeCall.rhyme);
    return () => setUserPoemZero('');
  } ,[])

  const ClearPoem = () => {
    setUserPoemZero('');
    setUserPoemOne('');
    setUserPoemTwo('');
  }

  const handleOrganizationSelection = (e) => {
    setUserPoemOne(e.currentTarget.value);
    setTimeout(() => carousel.current.slideNext(), 2000);
  }
  const handleEmotionSelection = (e) => {
    setUserPoemTwo(e.currentTarget.value);
    setTimeout(() => carousel.current.slideNext(), 2000);
  }


  return (
    <CallSection>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log(poem);
            ClearPoem();

          }}>
          <Carousel
            ref={carousel}
            itemsToShow={1}
            itemPadding={[0, 10]}
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
