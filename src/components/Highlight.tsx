import { HTMLAttributes, ReactNode } from 'react'
import './styles/highlight.scss'

type HighlightProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode,
    onClick?: () => void
}

export default function Highlight({children, onClick, ...props}: HighlightProps) {
    return (
        <div 
            onClick={onClick}
            className="highlight"
            {...props}>
            { children }
        </div>
    )
}