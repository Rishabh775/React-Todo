import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import useTodo from "./hooks/useTodo";

function App() {
  const { todo, handlecheckTodo, addTodos, handelDelete } = useTodo();
  return (
    <div className="  h-screen py-10 overflow-y-auto">
      <h1 className="text-center font-bold p-10 siz text-6xl">TODOS</h1>
      <div className="max-w-xl mx-auto p-10 overflow-y-auto bg-slate-100 space-y-6">
        <AddTodo submitTodo={addTodos} />
        <div className="space-y-3">
          {todo.map((item) => (
            <TodoItems
              delTodo={handelDelete}
              checkTodo={handlecheckTodo}
              key={item.id}
              todo={item}
            />
          ))}
        </div>
        {todo.length ? (
          ""
        ) : (
          <p className="font-bold text-center text-lg">
            {" "}
            No Todo Available ,Please add new todo`s{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
