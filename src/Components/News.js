import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  render() {
    return (
      <div>
        This is a NewS Compnenet
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}

export default News;
