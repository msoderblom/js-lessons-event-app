import React, { useState } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  const [email, setEmail] = useState("test.user@willandskill.se");
  const [password, setPassword] = useState("js-lesson-10");

  function login() {
    console.log(email);
    console.log(password);
    fetch(
      LOGIN_URL /* , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${}`
      }
    } */
    );
  }
  return (
    <div>
      <h1>Event App</h1>

      <div>
        <div>
          <label htmlFor="email" type="email">
            Email
          </label>
          <input
            name="email"
            placeholder="jane.doe@company.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
