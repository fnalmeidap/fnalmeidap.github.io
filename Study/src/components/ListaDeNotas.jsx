import React, { Component } from "react"

export default class ListaDeNotas extends Component{
    render(){
        return (
        <section>
			<ul>
				<li>
					<section>
						<header>
							<h3>Título 1</h3>
						</header>
						<p>Escreva a sua nota</p>
					</section>
				</li>
				<li>
					<section>
						<header>
							<h3>Título 2</h3>
						</header>
						<p>Escreva a sua nota</p>
					</section>
				</li>
				<li>
					<section>
						<header>
							<h3>Título 3</h3>
						</header>
						<p>Escreva a sua nota</p>
					</section>
				</li>
			</ul>
		</section>);
    }
}