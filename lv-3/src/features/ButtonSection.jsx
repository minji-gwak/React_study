import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';

const ButtonSection = () => {
  return (
    <InputContainer>
      <h1>Button</h1>
      <BoxContainer>
        <Button size="large" type="primary" label="arrow" onClick={() => alert('버튼을 만들었어요.')}>
          Large Primary Button
        </Button>
        <Button size="medium" type="primary">
          Medium
        </Button>
        <Button type="primary">Small</Button>
      </BoxContainer>
      <BoxContainer>
        <Button size="large" type="negative" label="alert" onClick={() => prompt('prompt도 사용해봤어요.')}>
          Large Negative Button
        </Button>
        <Button size="medium" type="negative">
          Medium
        </Button>
        <Button type="negative">Small</Button>
      </BoxContainer>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default React.memo(ButtonSection);
