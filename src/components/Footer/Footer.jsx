import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
          <div className="content-fluid">
            <text className="footer-text">Created by fnap@cin.ufpe.br</text>
          </div>
        </nav>
      </section>
    );
  }
}

export default Footer;
