import React from "react";

// Simple component using props
function Welcome({ name, city }) {
  return (
    <div>
      <h1>Hello {name} from {city}!</h1>
      <p>Welcome to React basics.</p>
    </div>
  );
}

export default function App() {
  return <Welcome name="Anshul" city="Chennai" />;
}