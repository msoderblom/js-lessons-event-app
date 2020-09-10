import React, { useRef } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  function login() {
    fetch(
      LOGIN_URL /* , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    } */
    );
  }
  return (
    <div>
      <h1>Event App</h1>

      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInput}
            name="email"
            placeholder="jane.doe@company.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordInput} name="password" type="password" />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
