import { Link, Route, Switch } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

import "./theme/variables.css"

import { setupIonicReact } from "@ionic/react";
setupIonicReact();

function App() {
  return (
    <div style={{ margin: "0 1rem 0 1rem", paddingTop: "env(safe-area-inset-top)" }}>
      
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/app/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <main>
            <p>There is nothing here</p>
            <Link to="/">Back home</Link>
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
