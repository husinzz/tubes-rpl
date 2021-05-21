import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Navigation from "./component/navigation.component";
import { Dashboard } from "./component/dashboard.component";
// import {Form} from './component/forms.component';

function App() {
  return (
    <Router>
      <Navigation />
      <Dashboard />
    </Router>
  );
}

export default App;
