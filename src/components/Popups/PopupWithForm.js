import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import Form from '../Forms/Form';
import Modal from './Modal';
import { CloseButton } from '../Buttons/index';
import { SubmitBtn, SwapAuthBtn, ButtonWrapper } from '../Forms/FormStyledElements';

const PopupWithForm = ({
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  anyInputInvalid,
  authStatus,
  handleAuthLinkClick,
  formButtonText,
}) => (
  <Overlay onClick={onClose} isOpen={isOpen}>
    <Modal isOpen={isOpen}>
      <CloseButton title="Закрыть" onClick={onClose} />
      <Form
        onSubmit={onSubmit}
        title={title}
        belongsTo="modal"
      >
          { children }
          <ButtonWrapper>
            <SubmitBtn disabled={anyInputInvalid}>{formButtonText}</SubmitBtn>
            { authStatus && (<SwapAuthBtn type="button" onClick={handleAuthLinkClick}>{authStatus.linkText}</SwapAuthBtn>
              )}
          </ButtonWrapper>
      </ Form>
    </Modal>
  </Overlay>
);

PopupWithForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element,
  ]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  anyInputInvalid: PropTypes.bool.isRequired,
};

export default PopupWithForm;
