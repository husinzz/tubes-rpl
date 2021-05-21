import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.svg" className="card-img-top" alt="..." />
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
