import React, { Component } from "react";
import "../../assets/css/banner.css";

class Banner extends Component {
  render() {
    return (
      <section className="landing">
        <nav className="landing-nav">
          <div className="landing-text">
            <h1>Felipe Nunes de Almeida Pereira</h1>
            <h3>Computer Engineering - 2018.2</h3>
            <h4>Informatics Centre - UFPE</h4>
          </div>
        </nav>
      </section>
    );
  }
}

export default Banner;
