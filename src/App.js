import React, { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import PlayerToggle from "./components/PlayerToggle";
import Task from "./components/Task";
import TaskAdd from "./components/TaskAdd";
import TaskSub from "./components/TaskSub";
import Timer from "./components/Timer";

function App() {
  const [todo, setTodo] = useState([{ id: 1 }]);
  const [player, setPlayer] = useState("youtube");

  const handleAdd = () => {
    const newItem = { id: todo.length + 1 };
    setTodo([...todo, newItem]);
  };
  const handleSub = (id) => {
    const newList = todo.filter((todo) => todo.id !== id);
    setTodo(newList);
  };

  return (
    <div className="App">
      <header className="h-screen text-center grid place-items-center flex flex-grid grid-flow-col cols-3 px-20">
        <div className="todoList justify-center overflow-hidden px-4 pt-3 bg-green-700 border-4 border-green-900 bg-opacity-60">
          <div className="text-2xl pb-3 text-white">To-do List</div>
          {todo.map((todo) => (
            <Task id={todo.id} />
          ))}
          <div className="text-center grid place-items-center flex grid-flow-col cols-2 px-12 pr-14">
            <TaskAdd handleAdd={handleAdd} />
            {todo.length > 1 && (
              <TaskSub handleSub={handleSub} id={todo.length} />
            )}
          </div>
          <br />
        </div>

        <div>
          <Timer/>
        </div>

        <div className="pt-20">
          <div className="border-4 border-green-900 shadow-xl mb-4">
            <Player player={player} />
          </div>
          <PlayerToggle player={player} setPlayer={setPlayer} />
        </div>
      </header>
    </div>
  );
}

export default App;
