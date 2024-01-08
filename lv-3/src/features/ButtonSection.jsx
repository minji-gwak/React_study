import React from 'react';
import styled from 'styled-components';
import { BoxContainer, LargeButton, MediumButton, SmallButton } from '../styles/CommonStyles';
import { ReactComponent as Primary } from '../images/right-arrow.svg';
import { ReactComponent as Negative } from '../images/warning.svg';

function ButtonSection() {
  return (
    <InputContainer>
      <h1>Button</h1>
      <BoxContainer>
        <LargeButton onClick={() => alert('버튼을 만들었어요.')} $primary>
          <LargeButtonText>
            Large Negative Button
            <Icon>
              <Primary />
            </Icon>
          </LargeButtonText>
        </LargeButton>
        <MediumButton $primary>Medium</MediumButton>
        <SmallButton $primary>Small</SmallButton>
      </BoxContainer>
      <BoxContainer>
        <LargeButton onClick={() => prompt('prompt도 사용해봤어요.')}>
          <LargeButtonText>
            Large Negative Button
            <Icon>
              <Negative />
            </Icon>
          </LargeButtonText>
        </LargeButton>
        <MediumButton>Medium</MediumButton>
        <SmallButton>Small</SmallButton>
      </BoxContainer>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LargeButtonText = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 7px;
`;

const Icon = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
export default React.memo(ButtonSection);
