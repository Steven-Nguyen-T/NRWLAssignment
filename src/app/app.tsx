import React from "react";
import "./app.css";
import Home from '../pages/Home'
import {BackendService} from '../backend'

interface AppProps {
  backend: BackendService;
}

const App = ({backend}: AppProps) => {
  return (
    <div className="app">
      <Home backend={backend}/>
    </div>
  );
};

export default App;
