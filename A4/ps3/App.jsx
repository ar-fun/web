import React, { useState } from "react";
import "./styles.css";

const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/201/300",
  "https://picsum.photos/202/300"
];

export default function App() {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      <img src={selected} alt="preview" width="300" />
      
      <div>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            width="100"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </div>
  );
}