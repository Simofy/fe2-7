import { formKeys } from "./formKeys";

export default function Preview({
  user
}) {
  return (
    <div>
        {Object.keys(formKeys).map((key) => <input key={key} readOnly value={user[key]}/>)}
    </div>
  );
}
