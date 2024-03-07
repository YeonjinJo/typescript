import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ContentType = {
  id: string;
  title: string;
  isDone: boolean;
};

type StateType = {
  todoItems: ContentType[];
};

const initialState: StateType = {
  todoItems: [],
};

export const todoSlice = createSlice({
  name: "todoManagement",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ContentType>) => {
      state.todoItems = [
        ...state.todoItems,
        {
          id: action.payload.id,
          title: action.payload.title,
          isDone: action.payload.isDone,
        },
      ];
    },

    deleteTodo: (state, action: PayloadAction<ContentType>) => {
      state.todoItems = state.todoItems.filter(
        (element) => action.payload.id !== element.id
      );
    },

    modifyTodo: (state, action: PayloadAction<ContentType>) => {
      const newTodoItem: ContentType[] = state.todoItems.filter(
        (element) => action.payload.id !== element.id
      );

      state.todoItems = [
        ...newTodoItem,
        {
          id: action.payload.id,
          title: action.payload.title,
          isDone: action.payload.isDone,
        },
      ];
    },
  },
});

export const { addTodo, deleteTodo, modifyTodo } = todoSlice.actions;
export default todoSlice.reducer;
