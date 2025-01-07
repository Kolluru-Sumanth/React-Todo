import { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo'; // Import CreateTodo component
import Todos from './components/Todos'; // Import Todos component

function App() {
  const [todos, setTodos] = useState([]);
  
  async function fetchfunc() {
    const res = await fetch("https://react-todo-backend-2xy8.onrender.com/Todos");
    const json = await res.json();
    setTodos(json);
  }

  useEffect(() => {
    fetchfunc();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todo App</h1>
        <CreateTodo onadding={fetchfunc} />
        <Todos todos={todos} onupdating={fetchfunc} />
      </div>
    </div>
  );
}

export default App;
