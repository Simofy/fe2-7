import { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Preview from "./pages/Preview";
import { lesson9Routes } from "./routes";

export default function Lesson9() {
  const [user, setUser] = useState({});
  const handleUserEdit = (key, value) =>
    setUser((oldUser) => ({
      ...oldUser,
      [key]: value,
    }));
  console.log(user);
  return (
    <>
      <Link to={`${routes.lesson9}${lesson9Routes.home}`}>Home</Link>
      <Link to={`${routes.lesson9}${lesson9Routes.edit}`}>Edit</Link>
      <Link to={`${routes.lesson9}${lesson9Routes.preview}`}>Preview</Link>
      <Switch>
        <Route path={`${routes.lesson9}${lesson9Routes.home}`}>
          <h2>Home</h2>
          <Create user={user} create={handleUserEdit} />
        </Route>
        <Route path={`${routes.lesson9}${lesson9Routes.edit}`}>
          <h2>Edit</h2>
          <Edit user={user} edit={handleUserEdit} />
        </Route>
        <Route path={`${routes.lesson9}${lesson9Routes.preview}`}>
          <h2>Preview</h2>
          <Preview user={user} />
        </Route>
      </Switch>
    </>
  );
}
