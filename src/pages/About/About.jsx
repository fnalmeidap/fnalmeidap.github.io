import React, { Component } from "react";
import "../../assets/css/about.css";
import computer from "../../assets/img/computador.png";
import memphis from "../../assets/img/memphis.png";
import arcade from "../../assets/img/maquina-de-arcade.png";
import math from "../../assets/img/square-root.png";
import network from "../../assets/img/browser.png";
import phyandeletro from "../../assets/img/electronic-circuit.png";
import python from "../../assets/img/pitao.png";

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
            <h1 className="about-title" id="main-middle-title">
              What am i interested in?
            </h1>
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
        <nav className="about-end">
          <div className="container">
            <div className="about-end-description">
              <h1 className="main-title">What have i already done?</h1>
            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Scientific article publication and Symposium presentation
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    The process of creating a way to analyze 2D Soccer
                    Simulation games was so good and seemingly new among the
                    competition teams that we decided to write an article about
                    it and submit to the{" "}
                    <b>Latin American Robotics Symposium LARS</b> at the{" "}
                    <b>8th Brazilian Symposium of Robotics</b>. We got accepted
                    and i virtually presented what we did in the article. This
                    also granted us a publication in the <b>IEEXplore</b>. Link
                    is{" "}
                    <a
                      target="blank"
                      href="https://ieeexplore.ieee.org/document/9307104"
                    >
                      here
                    </a>
                    .
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    PET Informática hackatoon
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    In July 2019 i had my first experience coding a real
                    application from scratch in a hackatoon presented by our
                    centre's PET team. There i had a one week bootcamp about web
                    technologies that we would use in the event such as{" "}
                    <b>Javascript, HTML, CSS, React</b> and <b>Node.js</b>.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    2D Simulation log analyzer
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is my best project so far! Here i had to design and
                    develop a framework to analyze through a heavy load of data
                    from the RobôCIn team robots and Machine Learning Agents. To
                    do this i used technologies such as{" "}
                    <b>Linux, Python, Pandas, Docker </b>
                    and <b>React</b>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="about-tech">
          <div className="container">
            <h2 className="about-title">Technologies i've used</h2>
            <p id="main-tech-subtitle">Click for more details.</p>
            <div class="row">
              <div class="col">
                <button
                  className="btn about-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#python-modal"
                >
                  Python
                </button>
              </div>
              <div class="col">
                <button className="btn about-btn" data-bs-toggle="modal" 
                data-bs-target="#cpp-modal">C/C++</button>
              </div>

              <div class="col">
                <button className="btn about-btn">Java</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Haskell</button>
              </div>
              <div class="col">
                <button className="btn about-btn">JS/TS</button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button className="btn about-btn">Node.js</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Anaconda</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Jupyter</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Pandas</button>
              </div>
              <div class="col">
                <button className="btn about-btn">PyCharm</button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button className="btn about-btn">Docker</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Kubernetes</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Terraform</button>
              </div>
              <div class="col">
                <button className="btn about-btn">SQL</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Express</button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button className="btn about-btn">Linux</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Shell</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Flask</button>
              </div>
              <div class="col">
                <button className="btn about-btn">React</button>
              </div>
              <div class="col">
                <button className="btn about-btn">Express</button>
              </div>
            </div>
          </div>
        </nav>
        <nav className="about-know-more">
          <div className="container">
            <h2 className="main-title">Check out my projects!</h2>
            <button type="button" class="btn btn-primary btn-lg">
              Projects page
            </button>
          </div>
        </nav>

        {/*Modals*/}
        <div
          class="modal fade"
          id="python-modal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Python
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="cpp-modal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  C/C++
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
