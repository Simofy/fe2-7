import { useMemo } from "react";
import { formKeys } from "./formKeys";

export default function Preview({ user }) {
  const parsedData = useMemo(
    () =>
      Object.keys(formKeys).map((key) => (
        <input key={key} readOnly value={user[key]} />
      )),
    [user]
  );
  return <div>{parsedData}</div>;
}
