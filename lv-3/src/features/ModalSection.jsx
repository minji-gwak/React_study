import React, { useState } from 'react';
import styled from 'styled-components';
import ModalPortal from '../components/portal/Portal';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';

const ModalSection = () => {
  const [smModalOn, setSmModalOn] = useState(false);
  const [mdModalOn, setMdModalOn] = useState(false);
  const mdModalHandler = () => setMdModalOn(!mdModalOn);
  const smModalHandler = () => setSmModalOn(!smModalOn);

  return (
    <>
      <h1>Modal</h1>
      <BoxContainer>
        <Button type="primary" label="Open Modal" onClick={mdModalHandler} />
        <Button size="large" type="negative" label="Open Modal" onClick={smModalHandler} />
        <ModalPortal>
          {mdModalOn && (
            <Modal size="medium" type="two" onClose={mdModalHandler}>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
            </Modal>
          )}
          {smModalOn && (
            <Modal type="x" onClose={smModalHandler}>
              닫기 버튼 1개가 있고,
              <br />
              외부 영영을 누르면 모달이 닫혀요.
            </Modal>
          )}
        </ModalPortal>
      </BoxContainer>
    </>
  );
};

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default React.memo(ModalSection);
