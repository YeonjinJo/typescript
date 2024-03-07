import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getTargetTodo, toggleTodo } from "../api/todos";


const ToggleTodo = ({ id }: { id: string }) => {
  const [isDone, setIsDone] = useState<boolean>();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    },
  });

  const onClickHandler = async () => {
    setIsDone(await getTargetTodo(id))
    mutate(id);
  };

  return (
    <button onClick={onClickHandler}>{isDone ? `취소` : `완료`}</button>
  );
};

export default ToggleTodo;
