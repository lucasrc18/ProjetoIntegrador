import { useNavigate } from 'react-router-dom';
import RouteLinkedButton from './RouteLinkedButton';

import Icon from './assets/Icon.png';

import './styles/header.scss';

export default function Header(){
    const navigate = useNavigate();

    return (
        <header id="main-header">
            <img onClick={ () => navigate("/") } src={ Icon } alt="" />

            <nav id="header-navbar">
                <RouteLinkedButton route="/tasks" id="tasks-page" title="Visualizar todas suas tarefas">
                    Tarefas
                </RouteLinkedButton>

                <RouteLinkedButton route="/profile" id="profile-page" title="Ver seu perfil pessoal">
                    Perfil
                </RouteLinkedButton>

                <RouteLinkedButton route="/store" id="store-page" title="Ir para a loja">
                    Loja
                </RouteLinkedButton>

                <RouteLinkedButton route="/social" id="social-page" title="Ver todos os seus amigos">
                    Amigos
                </RouteLinkedButton>
            </nav>
        </header>
    );
}