import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import EventListPage from "./pages/EventListPage";
import { UserContext } from "./contexts/UserContext";
import EventDetailPage from "./pages/EventDetailPage";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <UserContext.Provider value={{ token, setToken }}>
        <Switch>
          <Route path="/event/:slug" component={EventDetailPage} />

          <Route path="/event-list">
            <EventListPage></EventListPage>
          </Route>
          <Route path="/">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
