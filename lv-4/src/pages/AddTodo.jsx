import React from 'react';
import { Container } from '../styles/Common';
import Input from '../components/Input';

const AddTodo = () => {
  return (
    <Container>
      <Input type="text" maxlength="5" placeholder="작성자의 이름을 입력해주세요. (5자 이내)">
        작성자
      </Input>
      <Input type="text" maxlength="50" placeholder="제목을 입력해주세요. (50자 이내)">
        제목
      </Input>
      <Input type="textarea" maxlength="200" placeholder="내용을 입력해주세요. (200자 이내)">
        내용
      </Input>
    </Container>
  );
};

export default React.memo(AddTodo);
