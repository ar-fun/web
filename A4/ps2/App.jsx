import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div>
      <input value={a} onChange={e => setA(e.target.value)} placeholder="A" />
      <input value={b} onChange={e => setB(e.target.value)} placeholder="B" />

      <button onClick={() => setResult(Number(a) + Number(b))}>Add</button>
      <button onClick={() => setResult(Number(a) - Number(b))}>Subtract</button>

      <h3>Result: {result}</h3>
    </div>
  );
}