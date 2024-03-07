import { deleteTodo } from "../api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DeleteTodo = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteTodo, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    },
  });

  const onClickHandler = () => {
    mutate(id);
  };
  return <button onClick={onClickHandler}>삭제</button>;
};

export default DeleteTodo;
