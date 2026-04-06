import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!task) return;
    setList([...list, task]);
    setTask("");
  };

  return (
    <div>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}