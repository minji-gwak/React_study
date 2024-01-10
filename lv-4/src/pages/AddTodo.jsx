import React from 'react';
import { Container } from '../styles/Common';
import Input from '../components/Input';
import useInput from '../hooks/useInput';
import { Button } from '../components/Button';
import api from '../axios/api';

const AddTodo = () => {
  const [writer, writerChangeHandler, writeClearrHandler] = useInput();
  const [title, titleChangeHandler, titleClearrHandler] = useInput();
  const [content, contentChangeHandler, contentClearrHandler] = useInput();

  const submitHandler = async () => {
    await api.post('todos', { id: 2, writer: writer, title: title, content: content });
    writeClearrHandler();
    titleClearrHandler();
    contentClearrHandler();
  };

  return (
    <Container>
      <Input
        onChange={writerChangeHandler}
        value={writer}
        type="text"
        maxLength="5"
        placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
      >
        작성자
      </Input>
      <Input
        onChange={titleChangeHandler}
        value={title}
        type="text"
        maxLength="50"
        placeholder="제목을 입력해주세요. (50자 이내)"
      >
        제목
      </Input>
      <Input
        onChange={contentChangeHandler}
        value={content}
        type="textarea"
        maxLength="200"
        placeholder="내용을 입력해주세요. (200자 이내)"
      >
        내용
      </Input>
      <Button onClick={submitHandler}>추가하기</Button>
    </Container>
  );
};

export default React.memo(AddTodo);
