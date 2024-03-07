import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/config/configStore";
import { deleteTodo } from "../redux/modules/todoSlice";

const DeleteTodo = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector(
    (state: RootState) => state.todoManagement.todoItems
  );
  const [target] = todoList.filter((element) => id === element.id);

  const onClickHandler = () => {   
    dispatch(deleteTodo(target));
  };
  return <button onClick={onClickHandler}>삭제</button>;
};

export default DeleteTodo;
