import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          src="https://placeholder.pics/svg/340x250/DEDEDE/555555/This%20is%20an%20image"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

class CardGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row w-100">
          <div className="col-md-4 col-sm-12 py-2">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export { Card, CardGrid };
