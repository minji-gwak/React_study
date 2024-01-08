import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ModalPortal from '../components/portal/Portal';

function SelectSection() {
  const stackList = ['리액트', '자바', '스프링', '리액트네이티브'];
  const [firstChosen, setFirstChosen] = useState(0);
  const [secondChosen, setSecondChosen] = useState(0);
  const [firstOptionOn, setFirstOptionOn] = useState(false);
  const [secondOptionOn, setSecondOptionOn] = useState(false);

  const optionClickHandler = (type, idx) => {
    if (type === 'first') {
      setFirstChosen(idx);
      setFirstOptionOn((prevState) => !prevState);
    } else if (type === 'second') {
      setSecondChosen(idx);
      setSecondOptionOn((prevState) => !prevState);
    }
  };

  // Ref 디폴트값 null로 지정
  const searchRef = useRef(null);

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
    function handleFocus(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setFirstOptionOn(false);
        setSecondOptionOn(false);
      }
    }

    // 이벤트 리스너에 handleFocus 함수 등록
    document.addEventListener('mouseup', handleFocus);
    return () => {
      document.removeEventListener('mouseup', handleFocus);
    };
  }, [searchRef]);

  return (
    <div id="one">
      <SelectContainer>
        <h1>Select</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ position: 'relative' }}>
            <SelectButton onClick={() => setFirstOptionOn(!firstOptionOn)}>
              <div>{stackList[firstChosen]}</div>
              <div>▼</div>
            </SelectButton>
            <ModalPortal>
              {firstOptionOn && (
                <OverOptionSet ref={searchRef}>
                  {stackList.map((stack, idx) => (
                    <Option onClick={() => optionClickHandler('first', idx)}>{stack}</Option>
                  ))}
                </OverOptionSet>
              )}
            </ModalPortal>
          </div>
          <div style={{ position: 'relative' }}>
            <SelectButton onClick={() => setSecondOptionOn(!secondOptionOn)}>
              <div>{stackList[secondChosen]}</div>
              <div>▼</div>
            </SelectButton>
            {secondOptionOn && (
              <OptionSet ref={searchRef}>
                {stackList.map((stack, idx) => (
                  <Option onClick={() => optionClickHandler('second', idx)}>{stack}</Option>
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
