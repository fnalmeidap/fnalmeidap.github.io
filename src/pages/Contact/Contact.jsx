import React, { Component } from "react";
import "../../assets/css/contact.css";
import git from "../../assets/img/github.png";
import insta from "../../assets/img/instagram.png";
import linkedin from "../../assets/img/linkedin.png";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <nav className="contact-banner">
          <div className="container">
            <h1>Get in touch!</h1>
          </div>
          <div class="container contact-links">
            <div class="row">
              <div class="col">
                <img className="contact-image" src={git}></img>
                <a class="btn btn-primary" target="blank" href="https://github.com/fnalmeidap" role="button">
                  Github
                </a>
              </div>
              <div class="col">
              <img className="contact-image" src={linkedin}></img>
                <a class="btn btn-primary" target="blank" href="https://www.linkedin.com/in/fnap/" role="button">
                  LinkedIn
                </a>
              </div>
              <div class="col">
              <img className="contact-image" src={insta}></img>
                <a class="btn btn-primary" target="blank" href="https://www.instagram.com/f_nap/" role="button">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="contact-email">
            <h1>Email me through: <b id="ht">fnap@cin.ufpe.br</b></h1>
          </div>
        </nav>
      </section>
    );
  }
}

export default Contact;
