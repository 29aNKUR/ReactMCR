import { useRef, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const newText = ref.current?.value;
    if(newText && !todos.includes(newText) && newText.length > 0){
        setTodos([...todos, newText]);
    }
    if (ref.current) 
    ref.current.value='';
  }

  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_,i) => i !== index));
  }
 
  return (
    <div>
   <div className="flex justify-center m-10 p-10">
      <div>
        <input
          type="text"
          ref={ref}
          placeholder="Add todo"
          className="border w-44 p-4 rounded-md"
        />
      </div>

      <div>
        <button className="bg-blue-800 text-white rounded-lg p-4 ml-5" onClick={addTodo}>
          Add Todo
        </button>
      </div>

 
    </div>
    <div className="flex justify-center">
        <ul>
            {todos?.map((todo,index) => (
                <li key={index}>{todo} <button onClick={() => removeTodo(index)}>Remove</button></li>
            ))}
        </ul>
      </div>
    </div>
 
  );
};

export default Todo;
