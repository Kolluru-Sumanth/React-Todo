import { useState } from "react";

const CreateTodo = ({ onadding }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mb-8">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            fetch("https://react-todo-5thd.onrender.com/Todo", {
              method: "POST",
              body: JSON.stringify({ title, description }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then(async (res) => {
                const json = await res.json();
                alert("Todo is created");
                onadding();
              })
              .catch((err) => {
                console.error("Error creating todo", err);
              });
          }}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
