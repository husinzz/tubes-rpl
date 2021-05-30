import React, { Component } from "react";
import { CardGrid } from "./card.component";
import axios from "axios";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        writing: "",
        date: "",
      },
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/blog/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          article: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>{this.state.article.title}</h1>
        <p>Created : {this.state.article.date} </p>
        <div className="border border-dark article-box">
          <p className="px-3 py-1 ">{this.state.article.writing}</p>
        </div>
        <hr></hr>
        <h3>More articles</h3>
        <CardGrid />
      </div>
    );
  }
}

export { Blog };
