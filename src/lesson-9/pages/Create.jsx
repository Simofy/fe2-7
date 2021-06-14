import { formKeys } from "./formKeys";

export default function Create({ create, user: { name, email, password } }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          const { target } = e;
          e.preventDefault();
          console.log(target)
          Object.keys(formKeys).forEach((key) =>
            create(key, target[key].value)
          );
        }}
      >
        <input name={formKeys.name} />
        <input name={formKeys.email} type="email" />
        <input name={formKeys.password} type="password" />
        <input name={formKeys.address} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
