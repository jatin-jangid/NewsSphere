import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   newsData: this.data,
      newsData: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsSphere`;
  }

  capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

  async componentDidMount() {
    this.getNewsData();
  }

  getNewsData = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fca3f4915bbe407fae60131b75fa5a8f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      newsData: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handlePrevClick = () => {
    this.setState({ page: this.state.page - 1, loading: true }, () => {
      this.getNewsData();
    });
  };

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1, loading: true }, () => {
      this.getNewsData();
    });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchData();
    });
  };

  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fca3f4915bbe407fae60131b75fa5a8f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      newsData: this.state.newsData.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center my-4">
            NewsSphere - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          {this.state.loading && (
            <div className="text-center">
              <Spinner />
            </div>
          )}
          <InfiniteScroll
            dataLength={this.state.newsData.length}
            next={this.fetchMoreData}
            hasMore={this.state.newsData.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {!this.state.loading &&
                  this.state.newsData.map((data) => (
                    // <div className="container my-4">
                    <div className="col-md-3 my-3" key={data.publishedAt}>
                      <NewsItem
                        title={data.title ? data.title : "Title Not Available"}
                        description={
                          data.description
                            ? data.description
                            : "Description Not Available"
                        }
                        imageUrl={data.urlToImage}
                        newsUrl={data.url}
                        author={data.author}
                        publishedAt={data.publishedAt}
                        source={data.source.name}
                      />
                    </div>
                    // </div>
                  ))}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            type="button"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            type="button"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
        </div>
      </>
    );
  }
}

export default News;
