import { useEffect, useState } from "react";

export default function Lesson7(props) {
  const { incrementFunction } = props;
  const [testState, setTestState] = useState("");
  console.log(incrementFunction);
  useEffect(() => {
    console.log("useEffect");
    console.log(document.getElementById('test'))
  }, []);

  return (
    <button
      id="test"
      onClick={() => {
        incrementFunction((odlValue) => odlValue + 1);
        // let count = 0;
        // incrementFunction((oldIncrementValue) => {
        //   const newValue = [];
        //   newValue.push();
        //   return newValue;
        // });
        // testState.test += 100;
        // console.log(testState / 10)
        // setTestState(count);
      }}
    >
      Change state {testState}
    </button>
  );
}
