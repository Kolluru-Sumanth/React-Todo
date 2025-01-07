const Todos = ({ todos, onupdating }) => {
  return (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {todos.map((todo) => (
              <div key={todo._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{todo.title}</h4>
                  <p className="text-sm text-gray-600">{todo.description}</p>
                </div>
                <button
                  onClick={() => {
                    fetch("https://react-todo-5thd.onrender.com/Completed", {
                      method: "PUT",
                      body: JSON.stringify({ _id: todo._id }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }).then(() => {
                      onupdating();
                    });
                  }}
                  className={`w-full py-2 px-4 rounded-md transition-colors duration-200 ${
                    todo.completed 
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-yellow-500 text-white hover:bg-yellow-600"
                  }`}
                >
                  {todo.completed ? "Completed" : "Mark as Completed"}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Todos;