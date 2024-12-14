import React, { Component } from "react";
import { newsFallbackImage } from "./assets.js";
export class NewsItem extends Component {
  render() {
    let { title , description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <div>
        <div className="card" style={{}}>
          <span className="position-absolute top-0 start-500 translate-middle badge rounded-pill bg-danger" style={{left: '50%', zIndex: '1'}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imageUrl === "" ? newsFallbackImage : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(publishedAt).toDateString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
