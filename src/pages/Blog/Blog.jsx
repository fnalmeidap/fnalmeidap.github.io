import React, { Component } from "react";
import "../../assets/css/blog.css";
import Card from "../../components/Card"

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
               seek to explain it with my own simple words and drawings.
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
        <nav className="blog-cards">
          <Card
            title="Thoughts about flux"
            text="A small essay about the concept of flux seen
            in a intuitive perspective and then into a mathematical
            one."
            date="12/09/2020"
            link="https://medium.com/@fnap/thoughts-about-flux-2505073cca6d"
          ></Card>

        </nav>
      </section>
    );
  }
}

export default Blog;
