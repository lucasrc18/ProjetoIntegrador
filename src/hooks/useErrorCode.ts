type Error = {
    title: string,
    message: string
}

export default function useErrorCode(code: number){    
    const ErrorList: {[key: string]: Error} = { 
        403: {
            title: "Acesso negado",
            message: "Desculpe, mas parece que voce não tem permissão para acessar esta página."
        },
        404: {
            title: "Página não encontrada",
            message: "Desculpe, mas parece que a página que tentou acessar não existe."
        },
        500: {
            title: "Erro interno",
            message: "Desculpe-nos, algo de errado não está certo. :("
        },
        503: {
            title: "Servidor indisponível",
            message: "Desculpe-nos, o servidor parece estar indisponível. :("
        }
    }

    const error = ErrorList[code as keyof typeof ErrorList];

    if(error == undefined)
        window.location.href = '/error/404';
        return ErrorList[404];
    return error;
}