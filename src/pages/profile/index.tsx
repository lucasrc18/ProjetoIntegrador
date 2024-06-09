import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";

import "./style.scss";

export default function Profile() {
	return (
		<div id="profile-page">
			<Header />

			<ProfileSection />

			<main id="inventory">
				<h1>Inventário</h1>
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
