import React from 'react';
import styled from 'styled-components';

function SelectSection() {
  return (
    <div id="one">
      <SelectContainer>
        <h1>Select</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ position: 'relative' }}>
            <SelectButton>
              <div>리액트</div>
              <div>▼</div>
            </SelectButton>
          </div>
          <div style={{ position: 'relative' }}>
            <SelectButton>
              <div>리액트</div>
              <div>▼</div>
            </SelectButton>
          </div>
        </div>
      </SelectContainer>
    </div>
  );
}

const SelectContainer = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
export default React.memo(SelectSection);
