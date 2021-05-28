import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <section className="nav-bar">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light flex-sm-nowrap flex-wrap" >
          <div class="container-fluid">
            <a class="navbar-brand" target="blank" href="https://google.com">
              
            </a>
            <button
              class="navbar-toggler flex-grow-sm-1 flex-grow-0 me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About me
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default NavBar;
