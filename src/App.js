import { Link, Route, Switch } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";

function App() {
  return (
    <div style={{margin:'1rem'}}>
    <Switch>
      <Route path="/" exact>
        <Login/>
      </Route>
      <Route path="/app/dashboard" >
        <Dashboard/>
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
