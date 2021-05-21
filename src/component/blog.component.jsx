import React, { Component } from "react";
import { CardGrid } from "./card.component";

class Blog extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <h1>Title</h1>
        <p>Created : May 21 2021, 01:39 AM </p>
        <div className="border border-dark article-box">
          <p className="px-3 py-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae officia, ad rerum id natus ea. Ab nam, deleniti quidem, dolore ad, blanditiis odit natus ratione et repudiandae nemo perferendis!</p>
        </div>
        <hr></hr>
        <h3>More articles</h3>
        <CardGrid />
      </div>
    );
  }
}

export { Blog };
