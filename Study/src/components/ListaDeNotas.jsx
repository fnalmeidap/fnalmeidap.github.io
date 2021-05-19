import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        <ul>
          <li>
            <CardNota />
          </li>
          <li>
            <CardNota />
          </li>
          <li>
            <CardNota />
          </li>
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
