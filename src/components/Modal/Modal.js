import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from '../Portal/Portal';

class Modal extends Component {
  state = {};
  render() {
    const { children, on, toggle } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>X</CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCard = styled.div`
  position: relative;
  background: #fafafa;
  width: 900px;
  height: 500px;
  border-radius: 2.5px;
  box-shadow: 0 5px 28px -5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(250, 250, 250, 0.6);
`;

export default Modal;
