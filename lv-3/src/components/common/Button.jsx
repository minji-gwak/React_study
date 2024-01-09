import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../images/right-arrow.svg';
import { ReactComponent as AlertIcon } from '../../images/warning.svg';

const Button = ({ size, type, icon, label, onClick }) => {
  let StyledButton;
  let IconComponent;

  if (size === 'large') StyledButton = LargeButton;
  else if (size === 'medium') StyledButton = MediumButton;
  else StyledButton = SmallButton;

  if (icon === 'arrow') IconComponent = ArrowIcon;
  else if (icon === 'alert') IconComponent = AlertIcon;

  return (
    <StyledButton $primary={type === 'primary'} $negative={type === 'negative'} onClick={onClick}>
      <ButtonText>
        {label}
        {icon && <Icon>{IconComponent && <IconComponent />}</Icon>}
      </ButtonText>
    </StyledButton>
  );
};

const BaseButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LargeButton = styled(BaseButton)`
  height: 50px;
  width: 200px;
  font-weight: 600;
  ${(props) =>
    props.$primary && `color: rgb(0, 0, 0); border: 3px solid rgb(85, 239, 196); background-color: rgb(255, 255, 255);`}
  ${(props) =>
    props.$negative &&
    `color: rgb(214, 48, 49); border: 3px solid rgb(250, 177, 160); background-color: rgb(255, 255, 255);`}
  &:active {
    background-color: rgb(238, 238, 238);
  }
`;

const MediumButton = styled(BaseButton)`
  height: 45px;
  width: 130px;
  ${(props) => props.$primary && `background-color: rgb(85, 239, 196); color: rgb(0, 0, 0);`}
  ${(props) => props.$negative && `background-color: rgb(250, 177, 160); color: rgb(214, 48, 49);`}
  &:active {
    background-color: ${(props) => (props.$primary ? 'rgb(0, 184, 148)' : 'rgb(225, 112, 85)')};
  }
`;

const SmallButton = styled(BaseButton)`
  height: 40px;
  width: 100px;
  ${(props) => props.$primary && `background-color: rgb(85, 239, 196); color: rgb(0, 0, 0);`}
  ${(props) => props.$negative && `background-color: rgb(250, 177, 160); color: rgb(214, 48, 49);`}
  &:active {
    background-color: ${(props) => (props.$primary ? 'rgb(0, 184, 148)' : 'rgb(225, 112, 85)')};
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export default Button;
