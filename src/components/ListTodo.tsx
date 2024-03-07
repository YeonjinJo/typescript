import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import ModifyTodo from "./ModifyTodo";
import DeleteTodo from "./DeleteTodo";
import ToggleTodo from "./ToggleTodo";

const ListTodo = () => {
  const todoList = useSelector(
    (state: RootState) => state.todoManagement.todoItems
  );
  return (
    <div>
      {todoList.map((element) => (
        <p key={element.id} id={element.id}>
          {element.title}
          <ToggleTodo id={element.id} />
          <ModifyTodo id={element.id} />
          <DeleteTodo id={element.id} />
        </p>
      ))}
    </div>
  );
};

export default ListTodo;
