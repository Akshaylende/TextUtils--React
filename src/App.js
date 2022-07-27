import React, { useState } from "react";
import Navbar from './MyComponents/Navbar';
import './App.css';
import { TextForm } from "./MyComponents/TextForm";
import About from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Switch>
          <Route exact path="/about">
              <About />
            </Route>
            
            <Route exact path="/">
              <TextForm heading="Enter a text to analyze" />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
