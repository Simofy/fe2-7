import { useEffect, useState } from "react";

export default function SecondPart() {
  // incrementValue
  // incrementSize
  // incrementTime
  const [increment, setIncrement] = useState(0);
  const [size, setSize] = useState(1);
  const [time, setTime] = useState(1000);
  const [demoObject, setDemoObject] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setIncrement((oldValue) => oldValue + size);
    }, time);
    return () => {
      clearInterval(interval);
    };
  }, [size, time]);

  // useEffect(() => {
  //   setDemoObject({
  //     alio: "test",
  //     kill: () => {
  //       console.log("killed");
  //     },
  //   });
  // }, []);

  useEffect(() => {
    // demoObject clean up
    return () => demoObject && demoObject.kill();
  }, [demoObject]);

  console.log(demoObject);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIncrement((oldValue) => oldValue + 1);
  //   }, 1000);
  //   return () => {
  //     console.log("clearInterval", interval);
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <div>
      <label>
        Size
        <input
          value={size}
          type="number"
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </label>
      <label>
        Time
        <input
          value={time}
          type="number"
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </label>
      {increment}
    </div>
  );
}
