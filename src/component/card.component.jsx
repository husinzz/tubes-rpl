import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.article.title}</h5>
        <p className="card-text">{props.article.writing}</p>
        <a href={"/blog/" + props.article._id} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

class CardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: undefined,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        this.setState({
          article: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // return this.state.exercises.map(currentexercise => {
  //   return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;

  getCards() {
    if (this.state.article != undefined) {
      return this.state.article.map((currentCards) => {
        return (
          <div className="col-md-4 col-sm-12 py-2">
            <Card article={currentCards} key={currentCards._id} />
          </div>
        );
      });
    } else {
      return "Nothing here";
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row w-100">{this.getCards()}</div>
      </div>
    );
  }
}

export { Card, CardGrid };
