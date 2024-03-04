import { useRef, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const newText = ref.current?.value;
    if (newText && !todos.includes(newText) && newText.length > 0) {
      setTodos([...todos, newText]);
    }
    if (ref.current) ref.current.value = '';
  };

  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-auto max-w-2xl mt-10">
      <div className="flex items-center">
        <input
          type="text"
          ref={ref}
          placeholder="Add todo"
          className="border w-96 p-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <button
          className="bg-blue-800 text-white rounded-lg p-4 ml-2 hover:bg-blue-600 focus:outline-none"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <div className="mt-4">
        <ul className="list-disc pl-6">
          {todos?.map((todo, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2 text-lg">{todo}</span>
              <button
                className="bg-red-700 text-white hover:text-white focus:outline-none hover:bg-red-600 rounded-lg px-4 py-2 ml-auto"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
