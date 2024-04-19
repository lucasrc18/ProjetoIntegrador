import { HTMLAttributes } from 'react'
import './styles/divider.scss'

type DividerProps = HTMLAttributes<HTMLParagraphElement> & {
    children: string
}

export default function Divider({children, ...props}: DividerProps){
    return (
        <p className="divider" {...props}>{children}</p>
    )
}