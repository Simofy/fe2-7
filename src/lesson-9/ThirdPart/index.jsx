import { useEffect, useMemo, useState } from "react";

export default function ThirdPart({ test = 10 }) {
  // const [randomNumber, setRandomNumber] = useState(Math.random() * test);
  // useEffect(() => {
  //   setRandomNumber(Math.random() * test);
  // }, [test]);

  const array2D = useMemo(() => {
    const list = [];
    for (let i = 0; i < 5000; i += 1) {
      const row = [];
      for (let k = 0; k < 5000; k += 1) {
        row.push(Math.floor(Math.random() * 10));
      }
      list.push(row);
    }
    return list;
  }, []);

  // console.log(randomNumber);
  const parsedData = useMemo(() => {
    return array2D.map((row, index) => {
      let sum = 0;
      row.forEach((value) => (sum += value));
      return <div key={`_${sum}-${index}`}>{sum}</div>;
    });
  }, [array2D]);
  return <div>{parsedData}</div>;
}
