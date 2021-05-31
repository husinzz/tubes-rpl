import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Navigation from "./component/navigation.component";
import { Dashboard } from "./component/dashboard.component";
import { Blog } from "./component/singlepage.component";
import { Add } from "./component/add.component";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Dashboard} />
      <Route path="/blog/:id" component={Blog} />
      <Route path="/add" component={Add} />
    </Router>
  );
}

export default App;
