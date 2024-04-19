import { ReactNode } from "react"
import Divider from "../../../components/Divider"

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

    return (
        <div className="auth-section">
            <h1>{title}</h1>

            <p>{description}</p>

            {form}

            <button onClick={buttonAction}>{buttonText}</button>
            
            <Divider>ou</Divider>
        </div>
    )
}