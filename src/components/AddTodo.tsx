import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { AppDispatch } from "../redux/config/configStore";
import { addTodo } from "../redux/modules/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const id: string = uuid();
  const dispatch = useDispatch<AppDispatch>();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = {
      id,
      title,
      isDone: false,
    }
    dispatch(addTodo(newTodo))
    setTitle('')
  }

  return (
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={title} onChange={onChangeHandler}></input>
        <button>Submit</button>
      </form>
  );
};

export default AddTodo;
