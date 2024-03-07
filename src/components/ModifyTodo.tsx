import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/config/configStore";
import { modifyTodo } from "../redux/modules/todoSlice";

const ModifyTodo = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector(
    (state: RootState) => state.todoManagement.todoItems
  );
  const [target] = todoList.filter((element) => id === element.id);

  const [modifyOpen, setModifyOpen] = useState<Boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = {...target, title: newTitle};
    dispatch(modifyTodo(newTodo))

    setModifyOpen(false);
  };

  const modifyForm = () => {
    setModifyOpen(true);
  };

  return (
    <>
      {modifyOpen ? (
        <form onSubmit={onSubmitHandler}>
          <input type="text" value={newTitle} onChange={onChangeHandler}></input>
          <button>수정</button>
        </form>
      ) : (
        <button onClick={modifyForm}>수정</button>
      )}
    </>
  );
};

export default ModifyTodo;
