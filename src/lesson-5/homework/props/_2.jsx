import { useEffect, useState } from "react";

export default function SecondPropElement({ propValue }) {
  const [testState, setTestState] = useState(0);
  useEffect(() => {
    console.log(setTestState);
  }, []);
  function renderSomeDivs() {
    if (propValue % 2) {
      return <div>{testState}</div>;
    } else {
      return <div>Alio valio ir internetas</div>;
    }
  }
  return <div>{renderSomeDivs()}</div>;
}
