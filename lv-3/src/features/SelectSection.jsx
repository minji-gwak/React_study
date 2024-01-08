import React, { useState } from 'react';
import styled from 'styled-components';
import ModalPortal from '../components/portal/Portal';

function SelectSection() {
  const stackList = ['리액트', '자바', '스프링', '리액트네이티브'];
  const [firstChosen, setFirstChosen] = useState(0);
  const [secondChosen, setSecondChosen] = useState(0);
  const [firstOptionSetOn, setFirstOptionSetOn] = useState(false);
  const [secondOptionSetOn, setSecondOptionSetOn] = useState(false);
  const firstOptionSetOnHandler = () => setFirstOptionSetOn(!firstOptionSetOn);
  const secondOptionSetOnHandler = () => setSecondOptionSetOn(!secondOptionSetOn);
  const selectFirstStackHandler = (idx) => setFirstChosen(idx);
  const selectSecondStackHandler = (idx) => setSecondChosen(idx);

  return (
    <div id="one">
      <SelectContainer>
        <h1>Select</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ position: 'relative' }}>
            <SelectButton onClick={firstOptionSetOnHandler}>
              <div>{stackList[firstChosen]}</div>
              <div>▼</div>
            </SelectButton>
            <ModalPortal>
              {firstOptionSetOn && (
                <OverOptionSet>
                  {stackList.map((stack, idx) => (
                    <Option onClick={() => selectFirstStackHandler(idx)}>{stack}</Option>
                  ))}
                </OverOptionSet>
              )}
            </ModalPortal>
          </div>
          <div style={{ position: 'relative' }}>
            <SelectButton onClick={secondOptionSetOnHandler}>
              <div>{stackList[secondChosen]}</div>
              <div>▼</div>
            </SelectButton>
            {secondOptionSetOn && (
              <OptionSet>
                {stackList.map((stack, idx) => (
                  <Option onClick={() => selectSecondStackHandler(idx)}>{stack}</Option>
                ))}
              </OptionSet>
            )}
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

const OverOptionSet = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  z-index: 2;
  background-color: #fff;
  width: 300px;
  position: absolute;
  top: 650px;
`;

const OptionSet = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  z-index: 2;
  background-color: #fff;
  width: 300px;
  position: absolute;
  top: 50px;
`;

const Option = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 40px;

  :hover {
    background-color: #eee;
  }

  :first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  :last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
export default React.memo(SelectSection);
