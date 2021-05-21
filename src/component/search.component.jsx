import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends React.Component {
  render() {
    return (
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    );
  }
}
