import MoneyIcon from "./assets/MoneyIcon.png";
import ProfileIcon from "./assets/TempProfileIcon.png";

import { HTMLAttributes, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

import "./styles/profile-section.scss";

type ProfileSectionProps = HTMLAttributes<HTMLDivElement> & {
	halfSize?: boolean;
};

export default function ProfileSection(props: ProfileSectionProps){
	const {halfSize, ...divAttr} = props;

    const [username, setUsername] = useState<string>("Jacaré Banguela");

	// Sempre que o valor de username for alterado,
	// irá executar essa função
	useEffect(() => {
		user.username = username
		console.log(user.username)
	}, [username])

	const user = {
		username: username,
		//hp: 1,
		xp: 0.5,
		level: 20,
		money: 2159,
	};
    
    return (
        <div id="profile-section" style={{maxWidth: halfSize ? "50%" : ""}} {...divAttr}>
			<main id="profile-data">
				<img id="profile-pic" src={ProfileIcon} alt="Foto de perfil do usuario" />

				<div>
					<input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
					<hr />
					<div id="xp-sec">
						<strong>XP: </strong>
						<ProgressBar 
							title="XP"
							bg="#DAA520"
							progress={63}
							/>
					</div>
					<div id="lvl-money">
						<strong>lv.{user.level}</strong>
						<span>
							<img id="money-icon" src={MoneyIcon} alt="Moedas" />
							<i>{user.money}</i>
						</span>
					</div>
				</div>
			</main>
		</div>
    );
}