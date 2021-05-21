import React, { Component } from "react";

// Component
import Card from "./card.component";

export default class CardGrid1 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row w-100">
          <div className="col-md-4 col-sm-12 py-2">
            <Card />
          </div>
          <div className="col-md-4 col-sm-12 py-2">
            <Card />
          </div>
          <div className="col-md-4 col-sm-12 py-2">
            <Card />
          </div>
          <div className="col-md-4 col-sm-12 py-2">
            <Card />
          </div>
          <div className="col-md-4 col-sm-12 py-2">
            <Card />
          </div>
          <div className="col-md-4 col-sm-12 py-2">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}