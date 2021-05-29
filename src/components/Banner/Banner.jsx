import React, { Component } from "react";
import Footer from '../Footer';
import NavBar from "../NavBar";
import "./style.css";

class Banner extends Component {
  render() {
    return (
      <section className="landing">
        <NavBar></NavBar>
        <nav className="landing-nav">
          <div className="landing-text">
            <h1>Felipe Nunes de Almeida Pereira</h1>
            <h3>Engenharia da Computação - 2018.2</h3>
            <h4>Centro de Informática - UFPE</h4>
          </div>
        </nav>
        <Footer></Footer>
      </section>
    );
  }
}

export default Banner;
