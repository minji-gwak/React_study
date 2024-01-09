import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SelectBox from '../components/select/SelextBox';

function SelectSection() {
  const stackList = ['리액트', '자바', '스프링', '리액트네이티브'];
  const [firstChosen, setFirstChosen] = useState(0);
  const [secondChosen, setSecondChosen] = useState(0);
  const [firstOptionOn, setFirstOptionOn] = useState(false);
  const [secondOptionOn, setSecondOptionOn] = useState(false);

  const searchRef = useRef(null);

  const optionClickHandler = (type, idx) => {
    if (type === 'first') {
      setFirstChosen(idx);
      setFirstOptionOn((prevState) => !prevState);
    } else if (type === 'second') {
      setSecondChosen(idx);
      setSecondOptionOn((prevState) => !prevState);
    }
  };

  const toggleFirstOption = () => {
    setFirstOptionOn((prevState) => !prevState);
    setSecondOptionOn(false);
  };

  const toggleSecondOption = () => {
    setSecondOptionOn((prevState) => !prevState);
    setFirstOptionOn(false);
  };

  useEffect(() => {
    function handleFocus(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setFirstOptionOn(false);
        setSecondOptionOn(false);
      }
    }

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
          <SelectBox
            options={stackList}
            selectedOption={firstChosen}
            onSelect={(idx) => optionClickHandler('first', idx)}
            isOpen={firstOptionOn}
            onToggle={toggleFirstOption}
            searchRef={searchRef}
            usePortal={true} // 첫 번째 셀렉트 박스에만 portal 사용
          />
          <SelectBox
            options={stackList}
            selectedOption={secondChosen}
            onSelect={(idx) => optionClickHandler('second', idx)}
            isOpen={secondOptionOn}
            onToggle={toggleSecondOption}
            searchRef={searchRef}
            usePortal={false} // 두 번째 셀렉트 박스에는 portal 미사용
          />
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

export default React.memo(SelectSection);
