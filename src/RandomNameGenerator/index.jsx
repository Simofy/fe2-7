import { useState } from "react";
import "./style.css";

export default function RandomNameGenerator() {
  const [parsedNames, setParsedNames] = useState([]);
  const [name, setName] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const {
            target: { names },
          } = e;
          setParsedNames(names.value.split("\n"));
          names.value = "";
        }}
      >
        <textarea name="names" />
        <button type="submit">Submit</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (parsedNames.length) {
            const index = Math.floor(Math.random() * parsedNames.length);
            setName(parsedNames[index]);
            parsedNames.splice(index, 1);
          } else {
            setName("Nebėra žmonių");
          }
        }}
      >
        <span>{name}</span>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}
