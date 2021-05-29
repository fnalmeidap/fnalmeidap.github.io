import React, { Component } from "react";
import "../../assets/css/about.css";
import computer from "../../assets/img/computador.png"
import memphis from "../../assets/img/memphis.png"
import arcade from "../../assets/img/maquina-de-arcade.png"
import math from "../../assets/img/square-root.png"
import network from "../../assets/img/browser.png"
import phyandeletro from "../../assets/img/electronic-circuit.png"

import me from "../../assets/img/me.jpeg";

class About extends Component {
  render() {
    return (
      <section className="about">
        <nav className="about-intro">
          <div className="container">
            <img className="about-image" src={me}></img>
            <h1 className="about-title">Hi, i'm Felipe!</h1>
            <div className="about-text">
              <p>
                I am currently studying <b id="ht">Computer Engineering</b> at
                the Informatics Centre of Pernambuco's Federal University{" "}
                <b id="ht">(CIn - UFPE)</b>. I started this journey in august
                2018 and i intend to be graduated by the end of 2023. Besides
                studying advanced calculus and theoretical informatics i do{" "}
                <b id="ht">research</b> in two different projects. The first one
                is the wonderful <b id="ht">RobôCIn</b> team! We participate of
                robotics competitions and to improve our results on them we have
                to research and develop the things we tested and found; this is
                a activity i'm very fond of and the team is composed of great
                great people. As a team, we attend to 4 different categories:
                Line Follower, Very Small Size Soccer (VSS), Small Size Soccer
                League (SSL), 2D Simulation (2D SIM); i work here ^^. There my
                research is about <b id="ht">Data Analysis</b> of the matches we
                play and <b id="ht">Software Engineering</b> to develop systems
                able to analyze these matches since it's conception; that means
                to design it's resposibilities, behaviours, architecture and
                implement them. Besides that i also research about Data Analysis
                through <b id="ht">PIBIC</b> which is a initiative to aid
                undergraduate students in their research. My current project is
                supported by <b id="ht">CNPq</b> which is also related to Data
                Analysis of the 2D SIM games.
              </p>
            </div>
          </div>
        </nav>
        <nav className="about-middle">
          <div class="container">
            <h1 className="about-title" id="main-middle-title">What am i interested in?</h1>
            <div class="row">
              <div class="col middle-col">
              <img clasname="about-middle_image" src={computer}></img>
              <h3 id="middle-title">Python and C++ programming</h3>
              </div>
              <div class="col middle-col">
                <img clasname="about-middle_image" src={memphis}></img>
                <h3 id="middle-title">Security and DevOps</h3>
              </div>
              <div class="col middle-col">
                <img clasname="about-middle_image" src={arcade}></img>
                <h3 id="middle-title">Coding Challenges</h3>
              </div>
            </div>
            <div class="row">
              <div class="col middle-col">
              <img clasname="about-middle_image" src={math}></img>
              <h3 id="middle-title">Mathematics</h3>
              </div>
              <div class="col middle-col">
                <img clasname="about-middle_image" src={phyandeletro}></img>
                <h3 id="middle-title">Physics and Electronics</h3>
              </div>
              <div class="col middle-col">
                <img clasname="about-middle_image" src={network}></img>
                <h3 id="middle-title">Network Infrastructure</h3>
              </div>
            </div>
            
          </div>
        </nav>
      </section>
    );
  }
}

export default About;
