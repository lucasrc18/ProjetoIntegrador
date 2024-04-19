import AuthSection, { AuthSectionContent } from "./AuthSection";

export default function LoginSection() {
    const form = (
        <form>
            <label htmlFor="email" className="sr-only">Insira seu email:</label>
            <input type="text" name="email" placeholder="E-mail: " />

            <label htmlFor="password" className="sr-only">Insira sua senha:</label>
            <input type="password" name="password" placeholder="Senha: " />
        </form>
    );

    const data: AuthSectionContent = { 
        title: "Fazer login em sua conta",
        description: "Seja bem-vindo de volta, entre em sua conta e volte a se divertir com seus amigos e com o TaskChampions!",
        form: form,
        buttonText: "Fazer login",
        buttonAction: function(){
            
        }
    }
    
    return (
        <AuthSection 
            content={data}
        />
    );
}