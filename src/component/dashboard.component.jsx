import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import { CardGrid } from "./card.component";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <CardGrid />
      </div>
    );
  }
}

class AdminDashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td align="right">Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export { Dashboard, AdminDashboard };
