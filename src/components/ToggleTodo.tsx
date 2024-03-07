import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toggleTodo } from "../api/todos";


const ToggleTodo = ({ id, isDone }: { id: string, isDone: boolean }) => {

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    },
  });

  const onClickHandler = async () => {
    mutate(id);
  };

  return (
    <button onClick={onClickHandler}>{isDone ? `취소` : `완료`}</button>
  );
};

export default ToggleTodo;
