import React from "react";
import ToggleTodo from "./ToggleTodo";
import ModifyTodo from "./ModifyTodo";
import DeleteTodo from "./DeleteTodo";

type ContentType = {
    id: string;
    title: string;
    isDone: boolean;
  };

const MapTodo = ({ element }: { element: ContentType }) => {
  return (
    <p key={element.id} id={element.id}>
      {element.title}
      <ToggleTodo id={element.id} />
      <ModifyTodo id={element.id} />
      <DeleteTodo id={element.id} />
    </p>
  );
};

export default MapTodo;
