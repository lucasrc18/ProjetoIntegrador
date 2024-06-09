import { Dispatch, ReactNode, SetStateAction } from 'react'

import './modal.scss'

export type ModalProps = {
    children: ReactNode,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    title?: string
    
    // Styles
    bgColor?: string,
    width?: string,
    height?: string
}

export default function Modal(props: ModalProps){
    const { children, active, title, setActive } = props;
    const { bgColor, width, height } = props

    return (
        <div
            onClick={async e => {
                if(e.target == e.currentTarget)
                    setActive(false)
            }}
            style={{ display: active ? 'flex' : 'none', backgroundColor: bgColor }}
            className="modal-overlay">
                <div className="modal"
                    style={{width: width, height: height}}>
                        {title ? (
                            <header>
                                <h1>{title}</h1>
                            </header>
                        ) : null}

                        <div className="modal-content">
                            {children}
                        </div>
                </div>
        </div>
    )
}