import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { modifyTodo } from "../api/todos";

const ModifyTodo = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: modifyTodo, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    },
  });

  const [modifyOpen, setModifyOpen] = useState<Boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    mutate([id, newTitle]);
    setModifyOpen(false);
  };

  const modifyForm = () => {
    setModifyOpen(true);
  };

  return (
    <>
      {modifyOpen ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={onChangeHandler}
          ></input>
          <button onClick={onClickHandler}>수정</button>
        </div>
      ) : (
        <button onClick={modifyForm}>수정</button>
      )}
    </>
  );
};

export default ModifyTodo;
