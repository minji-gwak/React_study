import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';

const InputSection = () => {
  const [info, setInfo] = useState({
    name: '',
    price: '0',
  });

  const checkNumberHandler = (e) => {
    if (
      (e.keyCode > 47 && e.keyCode < 58) ||
      e.keyCode === 8 || //backspace
      e.keyCode === 37 ||
      e.keyCode === 39 || //방향키 →, ←
      e.keyCode === 46 //delete키
    ) {
      return;
    } else {
      e.preventDefault();
    }
  };

  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };

  const nameChangeHandler = (e) => setInfo({ name: e.target.value, price: info.price });

  const priceChangeHandler = (e) => {
    let { value } = e.target;
    let str =
      value[0] === '0'
        ? value
            .substr(1)
            .replace(/[^0-9]/gi, '')
            .replaceAll(',', '')
        : value.replace(/[^0-9]/gi, '').replaceAll(',', '');
    setInfo({ name: info.name, price: str });
  };

  return (
    <>
      <h1>Input</h1>
      <BoxContainer>
        <div>
          <label>이름</label>
          <InputBox type="text" onChange={nameChangeHandler} value={info.name} />
        </div>
        <div>
          <label>가격</label>
          <InputBox
            type="text"
            onKeyDown={checkNumberHandler}
            onChange={priceChangeHandler}
            value={addComma(info.price) || '0'}
          />
        </div>
        <Button type="primary" onClick={() => alert(`{name: ${info.name}, price: ${info.price}}`)}>
          저장
        </Button>
      </BoxContainer>
    </>
  );
};

const BoxContainer = styled.div`
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
