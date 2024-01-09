import React from 'react';
import styled from 'styled-components';
import ModalPortal from '../portal/Portal';

export default function SelectBox({
  options,
  selectedOption,
  onSelect,
  isOpen,
  onToggle,
  searchRef,
  usePortal = true, // portal 사용 여부 추가
}) {
  return (
    <div style={{ position: 'relative' }}>
      <SelectButton onClick={onToggle}>
        <div>{options[selectedOption]}</div>
        <div>▼</div>
      </SelectButton>
      {usePortal && ( // portal 사용 여부에 따라 렌더링 여부 결정
        <ModalPortal>
          {isOpen && (
            <OverOptionSet ref={searchRef}>
              {options.map((option, idx) => (
                <Option key={idx} onClick={() => onSelect(idx)}>
                  {option}
                </Option>
              ))}
            </OverOptionSet>
          )}
        </ModalPortal>
      )}
      {!usePortal &&
        isOpen && ( // portal 미사용 시 렌더링 여부 결정
          <OptionSet ref={searchRef}>
            {options.map((option, idx) => (
              <Option key={idx} onClick={() => onSelect(idx)}>
                {option}
              </Option>
            ))}
          </OptionSet>
        )}
    </div>
  );
}

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
