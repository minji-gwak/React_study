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
        <LargeButton $primary>
          <LargeButtonText>
            Large Negative Button
            {/* <LargeButtonIcon>
              <Primary />
            </LargeButtonIcon> */}
          </LargeButtonText>
        </LargeButton>
        <MediumButton $primary>Medium</MediumButton>
        <SmallButton $primary>Small</SmallButton>
      </BoxContainer>
      <BoxContainer>
        <LargeButton>
          <LargeButtonText>
            Large Negative Button
            {/* <LargeButtonIcon>
              <Negative />
            </LargeButtonIcon> */}
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

const LargeButtonIcon = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
export default React.memo(ButtonSection);
