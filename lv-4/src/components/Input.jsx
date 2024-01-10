import React from 'react';
import styled, { css } from 'styled-components';

const Input = ({ type, placeholder, children, maxLength, onChange, value }) => {
  let InputType;
  if (type === 'textarea') InputType = MultipleInput;
  else InputType = OneLineInput;

  return (
    <>
      <InputBox>
        <label>{children}</label>
        {type === 'textarea' && (
          <InputType rows="10" maxLength={maxLength} placeholder={placeholder} onChange={onChange} value={value} />
        )}
        {type !== 'textarea' && (
          <InputType type={type} maxLength={maxLength} placeholder={placeholder} onChange={onChange} value={value} />
        )}
      </InputBox>
    </>
  );
};

const InputBox = styled.div`
  width: 100%;
  margin-top: 30px;
  align-items: center;
  color: black;
`;

const InputStyle = css`
  width: 100%;
  padding: 12px 15px;
  margin-top: 10px;
  border: 1px solid rgb(215, 215, 215);
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const OneLineInput = styled.input`
  ${InputStyle}
`;

const MultipleInput = styled.textarea`
  resize: none;
  ${InputStyle}
`;

export default React.memo(Input);
