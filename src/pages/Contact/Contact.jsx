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
          <h1>Get in touch!</h1>
          <div class="contact-links">
            <div class="link-item">
              <img className="contact-image" src={git}></img>
              <a
                class="btn btn-primary"
                target="blank"
                href="https://github.com/fnalmeidap"
                role="button"
              >
                Github
              </a>
            </div>
            <div class="link-item">
              <img className="contact-image" src={linkedin}></img>
              <a
                class="btn btn-primary"
                target="blank"
                href="https://www.linkedin.com/in/fnap/"
                role="button"
              >
                LinkedIn
              </a>
            </div>
            <div class="link-item">
              <img className="contact-image" src={insta}></img>
              <a
                class="btn btn-primary"
                target="blank"
                href="https://www.instagram.com/f_nap/"
                role="button"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="contact-email">
            <h2>Email me</h2>
            <h2 id="fnap"><b id="ht">fnap@cin.ufpe.br</b></h2>
          </div>
        </nav>
      </section>
    );
  }
}

export default Contact;
