import axios from "axios";
import { ContentType } from "../redux/modules/todoSlice";

export const loadTodo = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_ADDRESS}/todoItems`
  );
  return data;
};

export const addTodo = async (newTodo: ContentType) => {
  await axios.post(
    `${process.env.REACT_APP_SERVER_ADDRESS}/todoItems`,
    newTodo
  );
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/todoItems/${id}`);
};

export const modifyTodo = async ([id, newTitle]: [string, string]) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_ADDRESS}/todoItems/${id}`, {
    title: newTitle,
  });
};

export const getTargetTodo = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_ADDRESS}/todoItems/${id}`
  );
  return data.isDone;
};

export const toggleTodo = async (id: string) => {
  const isDone = await getTargetTodo(id);
  await axios.patch(`${process.env.REACT_APP_SERVER_ADDRESS}/todoItems/${id}`, {
    isDone: !isDone,
  });
};
