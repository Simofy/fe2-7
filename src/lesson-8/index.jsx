import { useEffect, useState } from "react";
import FetchComponent from "./FetchComponent";

export default function Lesson8({ count }) {
  const [customState, setCustomState] = useState(undefined);
  const [increment, setIncrement] = useState(0);
  const [testObj, setTestObj] = useState({
    test: 0,
  });
  console.log("Lesson8");
  useEffect(() => {
    const newList = [];
    for (let i = 0; i < 10; i += 1) {
      newList.push(
        <div key={`_${i}`}>
          {i}-{testObj.test}
        </div>
      );
    }
    setCustomState(newList);
    console.log(new Date());
  }, [testObj.test]);
  return (
    <div>
      <FetchComponent count={increment}/>
      <button
        onClick={() => {
          setIncrement((oldIncrement) => oldIncrement + 1);
        }}
      >
        Increment
      </button>
      {/* {customState} */}
    </div>
  );
}
