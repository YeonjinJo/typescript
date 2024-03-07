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
    <div key={element.id} id={element.id}>
      <p>{element.title}</p>
      <ToggleTodo id={element.id} />
      <ModifyTodo id={element.id} />
      <DeleteTodo id={element.id} />
    </div>
  );
};

export default MapTodo;
