import { Todo } from "../types/todo";
import DeleteTodo from "./deleteTodo";

interface TodoItemsProps {
  todo: Todo;
  checkTodo: (id: number, completed: boolean) => void;
  delTodo: (id: number) => void;
}
const TodoItems = ({ todo, checkTodo, delTodo }: TodoItemsProps) => {
  return (
    <div className="flex gap-4  items-center">
      <label className="flex items-center gap-2 border grow border-gray-400 rounded-lg p-2 hover:bg-slate-100 hover:translate-x-1 hover:scale-105 ">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => checkTodo(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span
          className={
            todo.completed ? "line-through text-gray-400  " : "text-lg"
          }
        >
          {todo.title}
        </span>
      </label>
      <DeleteTodo itemId={todo.id} delTodo={delTodo} />
    </div>
  );
};

export default TodoItems;
