import { FaTrash } from "react-icons/fa";

interface DeleteTodoProps {
  itemId: number;
  delTodo: (id: number) => void;
}

const DeleteTodo = ({ itemId, delTodo }: DeleteTodoProps) => {
  return (
    <div>
      <button
        onClick={() => {
          delTodo(itemId);
        }}
        className="scale-125 "
      >
        <FaTrash />
      </button>
    </div>
  );
};
export default DeleteTodo;
