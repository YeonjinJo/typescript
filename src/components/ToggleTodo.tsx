import React from "react";
import { modifyTodo } from "../redux/modules/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/config/configStore";

const ToggleTodo = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector(
    (state: RootState) => state.todoManagement.todoItems
  );
  const [target] = todoList.filter((element) => id === element.id);
  const newTodo = {...target, isDone: !target.isDone};

  const onClickHandler = () => {
    dispatch(modifyTodo(newTodo));
  };
  return <button onClick={onClickHandler}>{target.isDone?`취소`:`완료`}</button>;
};

export default ToggleTodo;
