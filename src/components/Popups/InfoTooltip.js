import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import { CloseButton, FailureIcon, SuccessIcon } from '../Buttons/index';
import Modal from './Modal';
import IcQuote from '../IcQuote';

const Tooltip = styled.div`
  padding: 24px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`
const IconWrap = styled.div`
  width: 160px;
  height: 160px;
`;

const TooltipTitle = styled.span`
  margin: 0;
  padding: 0;
  max-width: 90%;
  font-family: Open Sans;
  font-weight: 900;
  font-size: 24px;
  line-height: 1.2;
  color: #000;
  text-align: center;
  text-overflow: unset;
  white-space: break-spaces;
`;
const TooltipBtn = styled.button`
  box-sizing: border-box;
  height: 44px;
  width: 144px;
  line-height: 1.33;
  border-radius: 2px;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  text-align: center;
  border: none;
  line-height: 1.2;
  background-color: #FF7A00;
  color: #000;
  padding: 0;
  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .65;
  }
`


const InfoTooltip = ({
  isOpen,
  onClose,
  success,
  message,
}) => {
  return (
    <Overlay onClick={onClose} isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        <CloseButton title="Закрыть" onClick={onClose} />
        {success
          ? (
          <Tooltip>
            <IconWrap>
              <SuccessIcon fill="#00D27A"/>
            </IconWrap>
            <TooltipTitle>{message}</TooltipTitle>
            <TooltipBtn onClick={onClose}>OK</TooltipBtn>
          </Tooltip>)
          : (
          <Tooltip>
            <IconWrap>
              <FailureIcon />
            </IconWrap>
            <TooltipTitle>{message}</TooltipTitle>
            <TooltipBtn onClick={onClose}>ЕЩЕ РАЗ</TooltipBtn>
          </Tooltip>)
        }
    </Modal>
  </Overlay>
  );
};

InfoTooltip.propTypes = {
  message: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  success: PropTypes.bool,
};

export default InfoTooltip;
