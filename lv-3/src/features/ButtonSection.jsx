import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';

function ButtonSection() {
  return (
    <InputContainer>
      <h1>Button</h1>
      <BoxContainer>
        <Button
          size="large"
          type="primary"
          icon="arrow"
          label="Large Primary Button"
          onClick={() => alert('버튼을 만들었어요.')}
        />
        <Button size="medium" type="primary" label="Medium" />
        <Button type="primary" label="Small" />
      </BoxContainer>
      <BoxContainer>
        <Button
          size="large"
          type="negative"
          icon="alert"
          label="Large Negative Button"
          onClick={() => prompt('prompt도 사용해봤어요.')}
        />
        <Button size="medium" type="negative" label="Medium" />
        <Button type="negative" label="Small" />
      </BoxContainer>
    </InputContainer>
  );
}

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
