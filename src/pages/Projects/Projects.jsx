import React, { Component } from "react";
import "../../assets/css/projects.css";
import site from "../../assets/img/programming.png";
import algo from "../../assets/img/algo.jpg";

class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <div className="projects-banner">
          <h1>Welcome to my projects page!</h1>
          <p>Last update: 30.05.2021</p>
        </div>
        <div className="projects-navigation">
          <div class="card">
            <img class="card-img-top" src={site} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">My website</h5>
              <p class="card-text">
              This page that you are browsing is one of my projects!
                It's my biggest front-end application so far.
              </p>
              <div className="badge-button-wrap">
                <div className="badge-wrap">
                  <span class="badge badge-primary">React</span>
                  <span class="badge badge-warning">JavaScript</span>
                  <span class="badge badge-dark">Github</span>
                </div>
                <a target="blank" href="https://github.com/fnalmeidap/fnalmeidap.github.io" class="btn btn-primary">
                  Project repository
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={algo} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Algorithms and Data Structures</h5>
              <p class="card-text">
                Code written in C++ of some of the most known algorithms.
              </p>
              <div className="badge-button-wrap">
                <div className="badge-wrap">
                  <span class="badge badge-primary">C++</span>
                  <span class="badge badge-success">Algorithms</span>
                  <span class="badge badge-dark">Github</span>
                </div>
                <a target="blank" href="https://github.com/fnalmeidap/Algorithms" class="btn btn-primary">
                  Project repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
