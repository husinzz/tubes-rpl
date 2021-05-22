import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Navigation from "./component/navigation.component";
import { Dashboard, AdminDashboard } from "./component/dashboard.component";
import { Blog } from "./component/blog.component";

function App() {
  return (
    <Router>
      <Navigation />
      {/* <Route path="/" exact component={Dashboard} /> */}
    </Router>
  );
}

export default App;
