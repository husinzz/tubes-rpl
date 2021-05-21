import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

// Components
import Navigation from "./component/navigation.component";
import TopDashboard from './component/top-dashboard.component';
import CardGrid1 from './component/card-grid1.component';

function App() {
  return (
    <Router>
      <Navigation />
      <TopDashboard />
      <div className="">
        <CardGrid1 />        
      </div>
    </Router>
  );
}

export default App;
