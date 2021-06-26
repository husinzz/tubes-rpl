import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Navigation from "./component/navigation.component";
import { Dashboard } from "./component/dashboard.component";
import { Single } from "./component/singlepage.component";
import { Add } from "./component/add.component";
import ReactWeather, { useOpenWeather } from "react-open-weather";

function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "0809cef3c992100f6180feac96750a0c",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <Router>
      <Navigation />
      <div className="row">
        <div className=" col-4 w-25">
          <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Jakarta"
            unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          />
        </div>
        <div className="col-8">
          <Route path="/" exact component={Dashboard} />
          <Route path="/note/:id" component={Single} />
          <Route path="/add" component={Add} />
        </div>
      </div>
    </Router>
  );
}

export default App;
