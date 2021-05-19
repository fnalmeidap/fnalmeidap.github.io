import React from 'react';
import ListaDeNotas from "./components/ListaDeNotas";

function App() {
	return (
		<section>
			<form>
				<input type="text" placeholder="Título do texto"></input>
					<textarea placeholder="Escreva sua nota" />
					<button>Criar nota</button>
			</form>
			<ListaDeNotas/>
		</section>
	);
}
export default App;
