import { Link } from "react-router-dom";

import Icon from '../assets/Icon.png';

type HomeHeaderProps = {
    buttonLink: string
}

export default function Header({buttonLink}: HomeHeaderProps) {
    return (
        <header id="home-header">
            <Link to="#">Fórum</Link>
            
            <img src={Icon} alt="Icone do TaskChampions" />

            <Link to={buttonLink}>{
                buttonLink === "/login" ? "Entrar" : "Registrar"
            }</Link>
        </header>
    )
}