import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../axios/api';

const initialState = {
  todos: [],
  //   todoItem: {},
  isLoading: false,
  error: null,
};

// 완성된 Thunk 함수
export const __getTodos = createAsyncThunk('todos/getTodos', async (payload, thunkAPI) => {
  try {
    const data = await api.get('todos');
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    toggleStatusTodo: (state, action) => {
      state.todos = state.todos.map((todo) => (todo.id !== action.payload ? todo : { ...todo, isDone: !todo.isDone }));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // getTodoById: (state, action) => {
    //   state.todoItem = state.todos.find(({ id }) => id === action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(__getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addTodo, toggleStatusTodo, deleteTodo } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
