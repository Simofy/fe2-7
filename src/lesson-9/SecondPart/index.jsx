import { useEffect, useState } from "react";

export default function SecondPart() {
  // incrementValue
  // incrementSize
  // incrementTime
  const [increment, setIncrement] = useState(0);
  const [demoObject, setDemoObject] = useState(undefined);
  useEffect(() => {
    setDemoObject({
      alio: "test",
      kill: () => {
        console.log("killed");
      },
    });
  }, []);

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
  return <div>{increment}</div>;
}
