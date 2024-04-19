import AuthSection, { AuthSectionContent } from "./AuthSection";

export default function RegisterSection(){
    const form = (
        <form>
            <label htmlFor="username" className="sr-only">Insira um nome de usuário:</label>
            <input type="text" name="username" placeholder="Nome de usuário: " />
            
            <label htmlFor="email" className="sr-only">Insira seu email:</label>
            <input type="text" name="email" placeholder="E-mail: " />

            <label htmlFor="password" className="sr-only">Insira sua senha:</label>
            <input type="password" name="password" placeholder="Senha: " />

            <label htmlFor="confirmPassword" className="sr-only">Confirme sua senha:</label>
            <input type="password" name="confirmPassword" placeholder="Confirme sua senha: " />
        </form>
    );

    const data: AuthSectionContent = { 
        title: "Crie sua conta",
        description: "Cadastre gratuitamente e divirta-se com seus amigos, em uma disputa, onde cada um deve seguir a sua própria rotina!",
        form: form,
        buttonText: "Registrar-se",
        buttonAction: function(){
            
        }
    }
    
    return (
        <AuthSection 
            content={data}
        />
    )
}