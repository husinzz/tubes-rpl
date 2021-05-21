import React, { Component } from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Tags
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export { Form };