import { useEffect, useState } from "react";

export default function Lesson7(props) {
  const { incrementFunction, depth } = props;
  const [testState, setTestState] = useState("");
  console.log(incrementFunction);
  useEffect(() => {
    console.log("useEffect");
    console.log(document.getElementById("test"));
  }, []);

  return (
    <div>
      Component {depth}
      <button
        id="test"
        onClick={() => {
          incrementFunction((odlValue) => {
            const index = depth - 1;
            return `${odlValue.substring(0, index)}${String(
              (Number(odlValue[index]) + 1) % 10
            )}${odlValue.substring(index + 1)}`;
          });
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
        Increment digit {depth}
      </button>
      {depth < 8 && (
        <Lesson7 incrementFunction={incrementFunction} depth={depth + 1} />
      )}
    </div>
  );
}
