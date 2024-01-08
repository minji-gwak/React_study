import React from 'react';
import { BoxContainer, LargeButton, SmallButton } from '../styles/CommonStyles';
import ModalPortal from '../components/portal/Portal';
import MediumModal from '../components/modal/MediumModal';
import SmallModal from '../components/modal/SmallModal';
import { useState } from 'react';

function ModalSection() {
  const [smModalOn, setSmModalOn] = useState(false);
  const [mdModalOn, setMdModalOn] = useState(false);
  const mdModalHandler = () => setMdModalOn(!mdModalOn);
  const smModalHandler = () => setSmModalOn(!smModalOn);

  return (
    <>
      <h1>Modal</h1>
      <BoxContainer>
        <SmallButton onClick={mdModalHandler} $primary>
          Open Modal
        </SmallButton>
        <LargeButton onClick={smModalHandler}>Open Modal</LargeButton>
        <ModalPortal>{mdModalOn && <MediumModal onClose={mdModalHandler} />}</ModalPortal>
        <ModalPortal>{smModalOn && <SmallModal onClose={smModalHandler} />}</ModalPortal>
      </BoxContainer>
    </>
  );
}

export default React.memo(ModalSection);
