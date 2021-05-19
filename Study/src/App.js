import React from 'react';

function App() {
	return (
		<section>
			<form>
				<input type="text" placeholder="Título do texto"></input>
				<textarea placeholder="Escreva sua nota" />
				<button>Criar nota</button>
			</form>
			<ul>
				<li>
					<section>
						<header>
							<h3>Título</h3>
						</header>
						<p>Escreva a sua nota</p>
					</section>
				</li>
			</ul>
		</section>
	);
}
export default App;
