import React, { Component } from "react";
import "../../assets/css/curriculum.css";
import english from "../../assets/files/fnap_cv_en.pdf";
import portuguese from "../../assets/files/fnap_cv_pt.pdf";

class Curriculum extends Component {
  render() {
    return (
      <section className="main-secion">
        <nav className="main-text">
          <div className="text-container-curriculum">
            <p className="text">
              Hi! If you are on this page it means that i really want to get in your company! 
              I made this page just for you :) If you want my <b id="ht">curriculum</b>, you may 
              choose between the <b id="ht">portuguese</b> or <b id="ht">english</b> version, they have the <b id="ht">same content</b> just
              in different languages, as you may expect.
            </p>
            <p className="text">
              This page is also <b id="ht">not indexed</b> anywhere from this domain, which means that you
              might want to save this link with care and love if you want to access it again.
            </p>

          </div>
        </nav>
        <nav className="main-buttons">
          <h1>
            Curriculum Vitae
          </h1>
          <div class="cv-links">
            <div class="link-item-cv">
              <a
                class="btn btn-primary"
                target="blank"
                href={portuguese}
                download="fnap_cv"
                role="button"
              >
                Português
              </a>
            </div>
            <div class="link-item-cv">
              <a
                class="btn btn-primary"
                target="blank"
                href={english}
                download="fnap_cv"
                role="button"
              >
                English
              </a>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Curriculum;
