import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.note.title}</h5>
        <p className="card-text">{props.note.writing.substring(0, 15)}</p>
        <Link to={"/note/" + props.note._id} className="btn btn-primary">
          Read more
        </Link>
        <Link to={"/edit/" + props.note._id}></Link>
      </div>
    </div>
  );
};

class CardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        this.setState({
          note: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCards() {
    if (this.state.note.length !== 0) {
      return this.state.note.map((currentCards) => {
        return (
          <div className="col-md-4 col-sm-12 py-2">
            <Card note={currentCards} key={currentCards._id} />
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
