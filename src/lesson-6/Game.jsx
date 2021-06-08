import { useState } from "react";

export default function Game() {
  // const [position, setPosition] = useState({
  //   x: 200,
  //   y: 200,
  // });
  const [leftPos, setLeftPos] = useState(200);
  const [topPos, setTopPos] = useState(200);
  const [position] = useState({
    x: 200,
    y: 200,
  });
  const [update, setUpdate] = useState(0);

  function setPosition(key, increment) {
    position[key] += increment;
    setUpdate(update + 1);
  }

  return (
    <div>
      <button
        onClick={() => {
          // #1
          // setPosition({
          //   ...position,
          //   x: position.x - 10
          // })
          // #2
          // setTopPos(topPos - 10);
          // #3
          // position.y -= 10;
          // setUpdate(update + 1);
          setPosition("y", -10);
        }}
      >
        Move UP
      </button>
      <button
        onClick={() => {
          // setPosition({
          //   ...position,
          //   x: position.x + 10
          // })
          // setTopPos(topPos + 10);
          // position.y += 10;
          // setUpdate(update + 1);
          setPosition("y", 10);
        }}
      >
        Move DOWN
      </button>
      <button
        onClick={() => {
          // setPosition({
          //   ...position,
          //   y: position.y - 10
          // })
          // setLeftPos(leftPos - 10);
          // position.x -= 10;
          // setUpdate(update + 1);
          setPosition("x", -10);
        }}
      >
        Move LEFT
      </button>
      <button
        onClick={() => {
          // setPosition({
          //   ...position,
          //   y: position.y + 10
          // })
          // setLeftPos(leftPos + 10);
          // position.x += 10;
          // setUpdate(update + 1);
          setPosition("x", 10);
        }}
      >
        Move RIGHT
      </button>
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "50px",
          height: "50px",
          transition: "top 200ms, left 200ms",
          background: "#faf",
        }}
      />
    </div>
  );
}
