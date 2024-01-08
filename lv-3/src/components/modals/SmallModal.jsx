import React from 'react';
import { ModalBackground } from '../../styles/CommonStyles';
import styled from 'styled-components';

function SmallModal({ onClose }) {
  return (
    <div>
      <ModalBackground onClick={onClose} />
      <ModalContainer>
        <div>
          닫기 버튼 1개가 있고,
          <br />
          외부 영영을 누르면 모달이 닫혀요.
        </div>
        <ButtonBox>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ButtonBox>
      </ModalContainer>
    </div>
  );
}

const ModalContainer = styled.div`
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

const ButtonBox = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const CloseButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`;

export default React.memo(SmallModal);
