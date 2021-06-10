import { useEffect, useState } from "react";

function Cell({ id, onClick, state }) {
  console.log(state)
  return (
    <button onClick={onClick}>
      {id}
      {state ? "OPEN" : "CLOSED"}
    </button>
  );
}

export default function Task1() {
  const [cellList, setCellList] = useState([]);
  useEffect(() => {
    const newCellList = [];
    for (let i = 0; i < 1; i += 1) {
      const id = Math.random();
      newCellList.push({
        id,
        cellState: false,
      });
    }
    setCellList(newCellList);
  }, []);
  console.log(cellList)
  return (
    <div>
      {cellList.map(({ id, cellState }) => (
        <Cell
          key={`_${id}`}
          state={cellState}
          a={console.log(cellState)}
          onClick={() =>
            setCellList((oldList) => {
              const index = oldList.findIndex(({ id: oldId }) => oldId === id);
              oldList[index].cellState = oldList[index].cellState ? false : true;
              return [...oldList];
            })
          }
        />
      ))}
    </div>
  );
}
