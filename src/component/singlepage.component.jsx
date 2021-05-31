import React, { Component } from "react";
import { CardGrid } from "./card.component";
import axios from "axios";
import { Link } from "react-router-dom";

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      writing: "",
      date: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeWriting = this.handleChangeWriting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/note/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: res.data.title,
          writing: res.data.writing,
          date: res.data.date,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delete() {
    axios
      .delete("http://localhost:8080/delete/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: "",
          writing: "",
          date: "",
        });
      });
  }

  handleChangeTitle(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeWriting(event) {
    event.preventDefault();
    this.setState({
      writing: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/edit/" + this.props.match.params.id,
        this.state
      )
      .then((res) => {
        alert("Succsesfully Edited");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            type="text"
            onChange={this.handleChangeTitle}
          />
          <p>Created : {this.state.date.substring(0, 10)} </p>
          <textarea
            value={this.state.writing}
            type="text"
            className="article-box"
            onChange={this.handleChangeWriting}
          />
          <input type="submit" value="Save edit" className="btn btn-warning" />
        </form>

        <a
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.delete();
          }}
          href="http://localhost:3000"
        >
          Delete
        </a>

        <hr></hr>
        <h3>Other notes</h3>
        <CardGrid />
      </div>
    );
  }
}

export { Single };
