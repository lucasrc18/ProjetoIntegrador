import Header from "../../components/Header";

import "./style.scss";

export default function Store() {
	return (
		<div id="page">
			<Header />
            <main>
                <h1>Loja</h1>
                <nav>
					<ul>
						<li><a href="#" id="select">Avatar</a></li>
						<li><a href="#">Moldura</a></li>
						<li><a href="#">Tema</a></li>
					</ul>
				</nav>
            </main>
		</div>
	);
}
