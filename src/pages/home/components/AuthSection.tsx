import { FaGithub as GithubIcon, FaGoogle as GoogleIcon } from 'react-icons/fa6'

import { ReactNode } from "react"
import Divider from "../../../components/Divider"

import Auth from "../../../services/auth"

export type AuthSectionContent = {
    title: string
    description: string
    form: ReactNode
    buttonText: string
    buttonAction: () => void
}

type AuthSectionProps = {
    content: AuthSectionContent
}

export default function AuthSection({content}: AuthSectionProps) {
    const {
        form, 
        title, 
        buttonText, 
        description, 
        buttonAction
    } = content;

    const { signInWithGoogle } = Auth;

    return (
        <div className="auth-section">
            <h1>{title}</h1>

            <p>{description}</p>

            {form}

            <button onClick={buttonAction}>{buttonText}</button>
            
            <Divider>ou</Divider>

            <button className="login-with" onClick={signInWithGoogle}>
                <GoogleIcon />
                <p>Logar usando sua conta Gmail</p>
            </button>
            
            <button className="login-with">
                <GithubIcon />
                <p>Logar usando sua conta GitHub</p>
            </button>
        </div>
    )
}