import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="counter-box">
        <h1>Simple Counter SPA</h1>
        <h2>Count: {count}</h2>

        <div className="btn-group">
          <button className="inc" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="dec" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
