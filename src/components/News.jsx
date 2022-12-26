import React from "react";
import NewsList from "./NewsList";
import "../style/NewsStyle.css";
function News() {
  return (
    <div className="news-sect">
      <div className="news-title">
        <i className="material-icons">campaign</i>
        <h3>News</h3>
      </div>
      <div className="news-body">
        <NewsList />
        <NewsList />
        <NewsList />
        <NewsList />
      </div>
      <div className="news-btn">
        <button className="d-flex justify-content-center align-items-center">
          <h6>More</h6>
        </button>
      </div>
    </div>
  );
}

export default News;
