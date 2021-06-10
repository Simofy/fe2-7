import { useEffect, useState } from "react";

function ListItem({ name, price, vegan, id }) {
  return (
    <div>
      {`name: ${name}, price: ${price}, vegan: ${vegan ? "yes" : "no"}`}
    </div>
  );
}

export default function FetchComponent({ count }) {
  const [list, setList] = useState(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(
      () =>
        fetch(`https://simutis.dev/api/generate-shopping-acart?limit=${count}`)
          .then((response) => response.json())
          // [{
          //   "id": "upiDxyr7u",
          //   "name": "Ben Quadinaros",
          //   "price": 42.51781777313162,
          //   "vegan": false
          // }],
          .then((data) => {
            if (Array.isArray(data)) {
              const newList = [];
              data.forEach((item) => newList.push(<ListItem {...item} />));
              setList(newList);
            }
            setLoading(false);
          })
          .catch((e) => {
            setLoading(false);
            throw e;
          }),
      1000
    );
  }, [count]);

  return (
    <div>
      {loading ? <div className="loading-container">Loading...</div> : list}
    </div>
  );
}
