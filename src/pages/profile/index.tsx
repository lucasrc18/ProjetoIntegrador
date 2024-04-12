import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";

import MoneyIcon from "./assets/MoneyIcon.png";
import ProfileIcon from "./assets/TempProfileIcon.png";

import "./style.scss";

export default function Profile() {
	const [username, setUsername] = useState<string>("Jacaré Banguela");

	// Sempre que o valor de username for alterado,
	// irá executar essa função
	useEffect(() => {
		user.username = username
	}, [username])

	const user = {
		username: username,
		hp: 1,
		xp: 0.5,
		level: 20,
		money: 2159,
	};

	return (
		<div id="page">
			<Header />

			<div id="container">
				<main id="profile-data">
					<img id="profile-pic" src={ProfileIcon} alt="Foto de perfil do usuario" />

					<div>
						<h3 
							contentEditable={true}
							onChange={event => setUsername(event.currentTarget.innerHTML)}>
							{user.username}
						</h3>
						<hr />
						<div id="hp-sec">
							<strong>HP: </strong>
							<ProgressBar bg="#F66363" progress={100} />
						</div>
						<div id="xp-sec">
							<strong>XP: </strong>
							<ProgressBar bg="#FFFA8D" progress={63} />
						</div>
						<div id="lvl-money">
							<i>lv.{user.level}</i>
							<span>
								<img id="money-icon" src={MoneyIcon} alt="Moedas" />
								<strong>{user.money}</strong>
							</span>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
