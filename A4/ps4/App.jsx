import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [marks, setMarks] = useState([0, 0, 0]);
  const [grade, setGrade] = useState("");

  const calculate = () => {
    const avg = (marks[0] + marks[1] + marks[2]) / 3;

    if (avg >= 90) setGrade("A");
    else if (avg >= 75) setGrade("B");
    else if (avg >= 50) setGrade("C");
    else setGrade("Fail");
  };

  return (
    <div>
      {marks.map((m, i) => (
        <input
          key={i}
          type="number"
          onChange={e => {
            const newMarks = [...marks];
            newMarks[i] = Number(e.target.value);
            setMarks(newMarks);
          }}
        />
      ))}

      <button onClick={calculate}>Calculate</button>
      <h3>Grade: {grade}</h3>
    </div>
  );
}