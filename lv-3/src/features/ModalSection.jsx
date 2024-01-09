import React, { useState } from 'react';
import { BoxContainer } from '../styles/CommonStyles';
import ModalPortal from '../components/portal/Portal';
import MediumModal from '../components/common/MediumModal';
import SmallModal from '../components/common/SmallModal';
import Button from '../components/common/Button';

function ModalSection() {
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
        <ModalPortal>{mdModalOn && <MediumModal onClose={mdModalHandler} />}</ModalPortal>
        <ModalPortal>{smModalOn && <SmallModal onClose={smModalHandler} />}</ModalPortal>
      </BoxContainer>
    </>
  );
}

export default React.memo(ModalSection);
