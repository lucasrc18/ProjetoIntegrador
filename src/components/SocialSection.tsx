import React, { useState, useEffect } from "react";
import MoneyIcon from "./assets/MoneyIcon.png";
import ProfileIcon from "./assets/TempProfileIcon.png";
import ProgressBar from "./ProgressBar";

import "./styles/profile-section.scss";


type SocialSectionProps = {
  username: string;
  xp: number;
  level: number;
  money: number;
};

const SocialSection: React.FC<SocialSectionProps> = ({
  username,
  xp,
  level,
  money,
}) => {
  const [localUsername, setLocalUsername] = useState(username);

  // Atualiza o valor do username local quando o valor externo muda
  useEffect(() => {
    setLocalUsername(username);
  }, [username]);

  return (
    <div id="profile-section">
      <main id="profile-data">
        <img id="profile-pic" src={ProfileIcon} alt="Foto de perfil do usuário" />

        <div>
          <input
            id="username"
            type="text"
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
          />
          <hr />
          <div id="xp-sec">
            <strong>XP: </strong>
            <ProgressBar title="XP" bg="#DAA520" progress={xp} />
          </div>
          <div id="lvl-money">
            <strong>lv.{level}</strong>
            <span>
              <img id="money-icon" src={MoneyIcon} alt="Moedas" />
              <i>{money}</i>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocialSection;
