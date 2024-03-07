import MapTodo from "./MapTodo";
import { useQuery } from "@tanstack/react-query";
import { loadTodo } from "../api/todos";
import { AxiosError } from "axios";

type ContentType = {
  id: string;
  title: string;
  isDone: boolean;
};

const ListTodo = () => {
  const { isLoading, isError, data } = useQuery<ContentType[], AxiosError>({
    queryKey: ["todos"],
    queryFn: loadTodo,
  });

  if (isLoading) {
    return <h1>로딩 중</h1>;
  }
  if (isError) {
    return <h1>에러 발생</h1>;
  }

  return (
    <div>
      <h2>In Progress</h2>
      {data!.map((element) => (
        <>{!element.isDone ? <MapTodo element={element} /> : <></>}</>
      ))}

      <h2>Done</h2>
      {data!.map((element) => (
        <>{element.isDone ? <MapTodo element={element} /> : <></>}</>
      ))}
    </div>
  );
};

export default ListTodo;
