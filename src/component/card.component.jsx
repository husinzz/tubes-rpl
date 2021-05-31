import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.article.title}</h5>
        <p className="card-text">{props.article.writing.substring(0, 15)}</p>
        <Link to={"/blog/" + props.article._id} className="btn btn-primary">
          Read more
        </Link>
        <Link to={"/edit/" + props.article._id}></Link>
      </div>
    </div>
  );
};

class CardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
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

  getCards() {
    if (this.state.article.length !== 0) {
      return this.state.article.map((currentCards) => {
        return (
          <div className="col-md-4 col-sm-12 py-2">
            <Card article={currentCards} key={currentCards._id} />
          </div>
        );
      });
    } else {
      return "No notes found";
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
