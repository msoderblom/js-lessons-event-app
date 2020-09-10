import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import EventListPage from "./pages/EventListPage";

function App() {
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
