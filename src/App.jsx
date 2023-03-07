import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "./Box";
import ArrowButton from "./ArrowButton";

const arrows = [
  {
    id: 1,
    className: "btn btn-primary",
    onClick: "setBoxLeft(boxLeft - 50);",
    content: "⬅️ Left",
  },
  {
    id: 2,
    className: "btn btn-warning",
    onClick: "setBoxLeft(boxLeft + 50);",
    content: "➡️ Right",
  },
  {
    id: 3,
    className: "btn btn-info",
    onClick: "setBoxTop(boxTop - 50);",
    content: "⬆️ Up",
  },
  {
    id: 4,
    className: "btn btn-danger",
    onClick: "{setBoxTop(boxTop + 50);",
    content: "⬇️ Down",
  },
];

function App() {
  const [boxTop, setBoxTop] = useState(100);
  const [boxLeft, setBoxLeft] = useState(300);

  return (
    <div className="App">
      <Box boxTop={boxTop} boxLeft={boxLeft} />

      {arrows.map((arrow) => (
        <ArrowButton
          key={arrow.id}
          boxLeft={boxLeft}
          setBoxLeft={setBoxLeft}
          boxTop={boxTop}
          setBoxTop={setBoxTop}
          {...arrow}
        />
      ))}

      {/* <button
        className="btn btn-primary"
        onClick={() => {
          setBoxLeft(boxLeft - 50);
        }}
      >
        ⬅️ Left
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          setBoxLeft(boxLeft + 50);
        }}
      >
        ➡️ Right
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          setBoxTop(boxTop - 50);
        }}
      >
        ⬆️ Up
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setBoxTop(boxTop + 50);
        }}
      >
        ⬇️ Down
      </button> */}
    </div>
  );
}

export default App;
