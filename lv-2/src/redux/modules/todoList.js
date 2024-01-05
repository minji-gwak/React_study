// action value
const ADD_TODO = 'todoList/ADD_TODO';
const TOGGLE_STATUS_TODO = 'todoList/TOGGLE_STATUS_TODO';
const DELETE_TODO = 'todoList/DELETE_TODO';
const GET_TODO_BY_ID = 'todoList/GET_TODO_BY_ID';

// action creator : action value를 return 하는 함수
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const toggleStatusTodo = (tid) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: tid,
  };
};
export const deleteTodo = (tid) => {
  return {
    type: DELETE_TODO,
    payload: tid,
  };
};
export const getTodoById = (tid) => {
  return {
    type: GET_TODO_BY_ID,
    payload: tid,
  };
};

// 초기 상태값 (state)
const initialState = {
  todos: [
    { id: 1, title: '민지', body: '민지 행복하기', isDone: true },
    { id: 2, title: '리액트', body: '리액트 공부하기', isDone: false },
    { id: 3, title: '컴포넌트', body: '컴포넌트 스타일링 하기', isDone: false },
  ],
  todoItem: { id: 1, title: '', body: '', isDone: true },
};

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state와 action
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_STATUS_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          } else {
            return { ...todo, isDone: !todo.isDone };
          }
        }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case GET_TODO_BY_ID:
      return { todoItem: state.todos.find(({ id }) => id === action.payload) };
    default:
      return state;
  }
};

export default todoList;
