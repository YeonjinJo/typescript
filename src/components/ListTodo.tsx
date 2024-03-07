import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import MapTodo from "./MapTodo";

const ListTodo = () => {
  const todoList = useSelector(
    (state: RootState) => state.todoManagement.todoItems
  );
  return (
    <div>
      <h2>In Progress</h2>
      {todoList.map((element) => (
        <>{!element.isDone ? <MapTodo element={element} /> : <></>}</>
      ))}

      <h2>Done</h2>
      {todoList.map((element) => (
        <>{element.isDone ? <MapTodo element={element} /> : <></>}</>
      ))}
    </div>
  );
};

export default ListTodo;
