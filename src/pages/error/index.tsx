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
                    {error.message}
                </div>
                <h4>Para voltar para a tela inicial, <Link to="/">clique aqui</Link>.</h4>
            </div>
        </div>
    );
}