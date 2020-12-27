import React from 'react';
import InfoTooltip from './InfoTooltip';

const Confirmation = ({ isOpen, onClose, onFailure, onSuccess, message, confirmSpan, initiativeBtnStatus, mainBtnStatus}) => {
  return (
    <InfoTooltip
      isOpen={isOpen}
      onFailure={onFailure}
      onSuccess={onSuccess}
      success={true}
      message={message}
      onClose={onClose}
      hasRedirect={true}
      confirmSpan={confirmSpan}
      initiativeBtnStatus={initiativeBtnStatus}
      mainBtnStatus={mainBtnStatus}
    >
     
    </InfoTooltip>
  );
};

export default Confirmation;
