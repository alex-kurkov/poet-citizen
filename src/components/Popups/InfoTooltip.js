import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import { CloseButton, FailureIcon, SuccessIcon } from '../Buttons/index';
import Modal from './Modal';

const Tooltip = styled.div`
  padding: 24px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
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

const InfoTooltip = ({
  isOpen,
  onClose,
  success,
  message,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', onClose, {});
    return () => window.removeEventListener('keydown', onClose);
  }, []);

  return (
    <Overlay onClick={onClose} isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        <CloseButton title="Закрыть" onClick={onClose} />
        {success
          ? (
          <Tooltip>
            <SuccessIcon />
            <TooltipTitle>{message}</TooltipTitle>
          </Tooltip>)
          : (
          <Tooltip>
            <FailureIcon />
          <TooltipTitle>{message}</TooltipTitle>
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
