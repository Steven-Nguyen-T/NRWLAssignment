import React from "react";
import "./app.css";
import Home from '../pages/Home'
import Details from "../pages/Details";
import {BackendService} from '../backend'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface AppProps {
  backend: BackendService;
}

const App = ({backend}: AppProps) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => <Home backend={backend}/>} />
          <Route exact path='/details' component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
