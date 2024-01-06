import React from 'react';
import styled from 'styled-components';
import { ModalBackground, SmallButton } from '../../styles/CommonStyles';

function MediumModal({ onClose }) {
  return (
    <div>
      <ModalBackground />
      <ModalContainer>
        <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
        <ButtonSet>
          <SmallButton onClick={onClose}>닫기</SmallButton>
          <SmallButton onClick={onClose} $primary>
            확인
          </SmallButton>
        </ButtonSet>
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
  width: 500px;
  height: 300px;
  position: absolute;
`;

const ButtonSet = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

export default React.memo(MediumModal);
