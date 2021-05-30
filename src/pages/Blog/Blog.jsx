import React, { Component } from "react";
import "../../assets/css/blog.css";

class Blog extends Component {
  render() {
    return (
      <section className="blog">
        <nav className="blog-banner">
          <h1 className="blog-title">Personal blog</h1>
          <div className="text-container">
            <p className="text-muted">
              Sometimes i like to write about a subject that arouse my
              curiosity. I try to understand how something works and then
               ought to explain it with my own simple words and drawings.
            </p>
          </div>
          <div className="blog-btn">
            <a class="btn btn-primary my-btn" href="#" role="button">
              Read latest
            </a>
            <a class="btn btn-secondary my-btn" href="#" role="button">
              Go to home
            </a>
          </div>
        </nav>
      </section>
    );
  }
}

export default Blog;
