import { useState } from "react";

interface AddTodo {
  submitTodo: (input: string) => void;
}
const AddTodo = ({ submitTodo }: AddTodo) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    if (!input.trim()) return;
    submitTodo(input);
    setInput("");
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            placeholder="Add Todo"
            value={input}
            className="border text-lg border-gray-400 rounded-md p-4 grow"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="w-1/4 text-lg hover:scale-105 hover:bg-gray-900 rounded-xl font-bold text-white bg-blue-500">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddTodo;
