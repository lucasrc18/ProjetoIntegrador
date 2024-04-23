import { Link } from "react-router-dom";

import './style.scss';

export default function ErrorPage(){
    
    
    return (
        <div id="error-page">
            <div>
                <h1>Desculpem-nos, algo de errado não está certo :(</h1>
                <hr />
                <div id="error-data">
                    <h2>Código do erro: <i id="error-code">0000</i></h2>
                    <div id="description">
                        <span>Descrição do erro: </span>
                        <span>{"Ocorreu um erro"}</span>
                    </div>
                </div>
                <h4>Para voltar para a tela inicial, <Link to="/">clique aqui</Link>.</h4>
            </div>
        </div>
    );
}