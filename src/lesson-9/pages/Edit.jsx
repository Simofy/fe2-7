import { formKeys } from "./formKeys";

export default function Edit({ edit, user }) {
  return (
    <div>
      <form>
        <input
          name="name"
          value={user[formKeys.name]}
          onChange={(e) => {
            edit(formKeys.name, e.target.value);
          }}
        />
      </form>
    </div>
  );
}
