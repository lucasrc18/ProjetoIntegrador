type Error = {
    code: number,
    title: string,
    message: string
}

export default function useErrorCode(code: number){    
    const ErrorList: {[key: string]: Error} = { 
        404: {
            code: 404,
            title: "Página não encontrada",
            message: "Desculpe, mas parece que a página que tentou acessar não existe."
        },
        500: {
            code: 500,
            title: "Erro interno",
            message: "Desculpe-nos, algo de errado não está certo. :("
        }
    }

    const error = ErrorList[code as keyof typeof ErrorList];

    if(error == undefined)
        return ErrorList[500];
    return error;
}