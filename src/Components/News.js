import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  
  constructor() {
    super();
    this.state = {
    //   newsData: this.data,
      newsData: [],
    };
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fca3f4915bbe407fae60131b75fa5a8f';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ newsData: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-4">
        <h1>NewsSphere - Top Headlines</h1>
        <div className="row">
          { this.state.newsData.map((data) => (
            <div className="col-md-3 my-3" key={data.url}>
              <NewsItem
                title={data.title ? data.title : 'Title Not Available'}
                description={data.description ? data.description : 'Description Not Available'}
                imageUrl={data.urlToImage}
                newsUrl={data.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
