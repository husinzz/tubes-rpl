import axios from "axios";
import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      writing: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeWriting = this.handleChangeWriting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeWriting(event) {
    this.setState({
      writing: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const article = {
      title: this.state.title,
      writing: this.state.writing,
    };

    axios
      .post("http://localhost:8080/add", article)
      .then((res) => alert("Successfully added"));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title :
          <input
            type="text"
            title={this.state.title}
            onChange={this.handleChangeTitle}
          />
        </label>
        <label>
          Writing :
          <textarea
            type="text"
            writing={this.state.writing}
            onChange={this.handleChangeWriting}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { Add };
