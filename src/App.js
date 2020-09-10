import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import EventListPage from "./pages/EventListPage";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  const [email, setEmail] = useState("test.user@willandskill.se");
  const [password, setPassword] = useState("js-lesson-10");

  function login() {
    const payload = {
      email: email,
      password: password,
    };
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <Switch>
        <Route path="/event-list">
          <EventListPage></EventListPage>
        </Route>
        <Route path="/">
          <LoginPage></LoginPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
