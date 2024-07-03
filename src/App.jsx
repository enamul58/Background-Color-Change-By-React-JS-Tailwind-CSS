import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed bottom-12 gap-2 bg-white rounded px-2 py-2 justify-center">
        <button className="btn bg-red-500" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="btn bg-green-500" onClick={() => setColor("green")}>
          Green
        </button>
        <button className="btn bg-blue-500" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button
          className="btn bg-yellow-500"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="btn bg-purple-500"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
