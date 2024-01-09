import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Modal = ({ size = 'small', type, children, onClose }) => {
  let ModalContainer;

  if (size === 'medium') ModalContainer = MediumModal;
  else ModalContainer = SmallModal;

  return (
    <div>
      {size === 'medium' && <ModalBackground />}
      {size === 'small' && <ModalBackground onClick={onClose} />}
      <ModalContainer>
        <div>{children}</div>
        {type === 'x' && (
          <CloseButtonBox>
            <XButton onClick={onClose}>X</XButton>
          </CloseButtonBox>
        )}
        {type === 'two' && (
          <TwoButtonBox>
            <Button type="negative" label="닫기" onClick={onClose} />
            <Button type="primary" label="확인" onClick={onClose} />
          </TwoButtonBox>
        )}
      </ModalContainer>
    </div>
  );
};

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

const MediumModal = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
  position: absolute;
`;

const SmallModal = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 200px;
  position: absolute;
`;

const TwoButtonBox = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

const CloseButtonBox = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const XButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`;

export default React.memo(Modal);
