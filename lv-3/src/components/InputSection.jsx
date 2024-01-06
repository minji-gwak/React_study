import React from 'react';
import styled from 'styled-components';
import { SmallButton } from '../styles/CommonStyles';

function InputSection() {
  return (
    <>
      <h1>Input</h1>
      <InputBoxContainer>
        <div>
          <label>이름</label>
          <InputBox type="text" />
        </div>
        <div>
          <label>가격</label>
          <InputBox type="text" value="0" />
        </div>
        <SmallButton $primary>저장</SmallButton>
      </InputBoxContainer>
    </>
  );
}

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const InputBox = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

export default React.memo(InputSection);
