import React, { Component } from "react";
import "../../assets/css/card.css";
import image from "../../assets/img/SC.png";

{/* This Card receives four arguments as props:
  - title
  - text
  - date  
*/}

class Card extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <section className="main-card">
        <div className="container">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <p class="card-text">
                {this.props.text}
              </p>
              <a href={this.props.link} target="blank" class="btn btn-primary">
                Read post
              </a>
            </div>
            <div class="card-footer text-muted">{this.props.date}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
