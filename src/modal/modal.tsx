import { ReactNode } from 'react'

import './modal.scss'

type ModalProps = {
    children: ReactNode,
    active: boolean,
    title?: string
    
    // Styles
    bgColor?: string,
    width?: string,
    height?: string
}

export default function Modal(props: ModalProps){
    const { children, active, title } = props
    
    const { bgColor, width, height } = props

    return (
        <div
            style={{ display: active ? 'flex' : 'none', backgroundColor: bgColor }}
            className="modal-overlay">
                <div className="modal"
                    style={{width: width, height: height}}>
                        {title ? (
                            <header>
                                <h1>{title}</h1>
                            </header>
                        ) : null}

                        {children}
                </div>
        </div>
    )
}