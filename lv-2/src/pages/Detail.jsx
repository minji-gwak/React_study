import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const todoItem = useSelector((state) => state.todoList.todoItem);

  return (
    <div>
      <div>
        <div>
          <div>
            <div>ID : {params.id}</div>
            <button
              onClick={() => {
                navigate('/');
              }}
            >
              이전으로
            </button>
          </div>
          <h1>{todoItem.title}</h1>
          <p>{todoItem.body}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Detail);
