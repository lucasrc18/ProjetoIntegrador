import { useNavigate } from 'react-router-dom';

import Icon from './assets/Icon.png';

import './styles/header.scss';

export default function Header(){
    const navigate = useNavigate();

    return (
        <header id="main-header">
            <img onClick={ () => navigate("/") } src={ Icon } alt="" />

            <nav id="header-navbar">
                <a title="Visualizar todas suas tarefas">
                    <p>Tarefas</p>
                </a>
                <a title="Ver seu perfil pessoal">
                    <p>Perfil</p>
                </a>
                <a title="Ir para a loja">
                    <p>Loja</p>
                </a>
                <a title="Ver todos os seus amigos">
                    <p>Amigos</p>
                </a>
            </nav>
        </header>
    );
}