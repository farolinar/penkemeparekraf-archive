import React, { Suspense } from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Routes from "./js/routes";

function App() {
  return (
    <Suspense fallback={'..'}>
      <Router>
        <Switch>
          {
            Routes.map(route => {
              return <Route key={route.path} {...route} />
            })
          }
          <Redirect to="/page/404" />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
