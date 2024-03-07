import React, { useState } from "react";
import uuid from "react-uuid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api/todos";

const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const id: string = uuid();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addTodo, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    },
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = {
      id,
      title,
      isDone: false,
    };

    mutate(newTodo);

    setTitle("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={title} onChange={onChangeHandler}></input>
      <button>Submit</button>
    </form>
  );
};

export default AddTodo;
