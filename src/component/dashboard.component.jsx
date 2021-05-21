import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Carousel from "./carousel.component";
import { Card, CardGrid } from "./card.component";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="row w-100 bg-dark py-3 px-3">
          <div className="col-md-8 col-sm-12">
            <Carousel />
          </div>
          <div className="col-md-4">
            <h1 className="text-light">Breaking News</h1>
            <Card />
          </div>
        </div>
        <CardGrid />
      </div>
    );
  }
}

export { Dashboard };
