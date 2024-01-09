import React from 'react';
import styled from 'styled-components';
import { ModalBackground } from '../../styles/CommonStyles';
import Button from '../common/Button';

function MediumModal({ onClose }) {
  return (
    <div>
      <ModalBackground />
      <ModalContainer>
        <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
        <ButtonSet>
          <Button type="negative" label="닫기" onClick={onClose} />
          <Button type="primary" label="확인" onClick={onClose} />
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
