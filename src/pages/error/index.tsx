import { Link, useParams } from "react-router-dom";

import useErrorCode from "../../hooks/useErrorCode";
import './style.scss';

export default function ErrorPage(){ 
    const { ErrorCode } = useParams();

    const error = useErrorCode(Number(ErrorCode));

    return (
        <div id="error-page">
            <div>
                <h1>{error.title}</h1>
                <hr />
                <div id="error-data">
                    <h2>Código do erro: <i id="error-code">{ErrorCode}</i></h2>
                    <h3>Descrição do erro: </h3>
                    <div id="description">
                        {error.message}
                    </div>
                </div>
                <h4>Para voltar para a tela inicial, <Link to="/">clique aqui</Link>.</h4>
            </div>
        </div>
    );
}