import React, { Suspense } from "react";
import CacheBuster from 'react-cache-buster';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Routes from "./js/routes";
import { version } from '../package.json';
import Loading from './js/views/component/loading';

function App() {
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={true} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<Loading visibility={true} />} //If not pass, nothing appears at the time of new version check.
    >
      <Suspense fallback={'..'}>
        <Router>
          <Switch>
            {
              Routes.map(route => {
                return <Route key={route.path} {...route} />
              })
            }
            <Redirect to="/" />
          </Switch>
        </Router>
      </Suspense>
    </CacheBuster>
  );
}

export default App;
