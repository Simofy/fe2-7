import { useEffect, useState } from "react";

function Node1({ state, depth = 0 }) {
  const [internalState, setInternalState] = useState(false);
  useEffect(() => {
    if (state) {
      setInternalState((oldState) => !oldState);
    }
  }, [state]);
  return (
    <>
      <div
        onClick={() => setInternalState(!internalState)}
        style={{
          width: "50px",
          margin: "12px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: internalState ? "#faa" : "#afa",
        }}
      >
        {depth}
      </div>
      {depth < 7 && <Node1 state={internalState} depth={depth + 1} />}
    </>
  );
}

function Node2({ value, bitValue }) {
  return (
    <>
      <div
        style={{
          width: "50px",
          margin: "12px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: !(value & bitValue) ? "#faa" : "#afa",
        }}
      >
        {bitValue}
      </div>
    </>
  );
}

export default function BinaryIncrement() {
  // return <Node state={true} />;
  const [increment, setIncrement] = useState(0);
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    const newNodeList = [];
    for (let i = 0; i < 2; i += 1) {
      const pow = 2 ** i; // Math.pow(2, i);
      newNodeList.push(
        <Node2 key={`_${pow}`} bitValue={pow} value={increment} />
      );
    }
    setNodes(newNodeList);
  }, [increment]);
  return (
    <>
      {/* <Node1 state={true} depth={0} /> */}
      <button onClick={() => setIncrement(increment + 1)}>Increment {increment}</button>
      {nodes}
    </>
  );
}
