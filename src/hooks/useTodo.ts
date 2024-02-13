import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export default function useTodo() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todo");
    const initialValue: Todo[] = JSON.parse(saved || "[]");
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handlecheckTodo = (id: number, completed: boolean) => {
    setTodo((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    console.log(id, completed);
  };

  const addTodos = (input: string) => {
    const newTodo = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTodo([...todo, newTodo]);
  };

  const handelDelete = (id: number) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
    console.log(todo);
  };
  return {
    todo,
    handlecheckTodo,
    addTodos,
    handelDelete,
  };
}
