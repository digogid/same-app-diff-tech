import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import List from './components/List';
import Details from './components/Details'

const routes = [
  {
    path: "/list",
    component: List
  },
  {
    path: "/details/:id",
    component: Details
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component}/>
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
