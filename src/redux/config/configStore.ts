import { configureStore } from "@reduxjs/toolkit";
import todoManagement from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    todoManagement: todoManagement,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
