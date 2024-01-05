import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const todoItem = useSelector((state) => state.todoList.todoItem);

  return (
    <DetailLayout>
      <DetailContainer>
        <div>
          <DetailHeader>
            <div>ID : {params.id}</div>
            <PrevButton
              onClick={() => {
                navigate('/');
              }}
            >
              이전으로
            </PrevButton>
          </DetailHeader>
          <TodoTitle>{todoItem.title}</TodoTitle>
          <TodoBody>{todoItem.body}</TodoBody>
        </div>
      </DetailContainer>
    </DetailLayout>
  );
}

const DetailLayout = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const DetailContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const DetailHeader = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;
const PrevButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const TodoTitle = styled.h1`
  padding: 0px 24px;
`;
const TodoBody = styled.div`
  padding: 0px 24px;
`;

export default React.memo(Detail);
