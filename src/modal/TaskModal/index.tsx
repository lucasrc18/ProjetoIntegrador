import { useState } from 'react'
import Modal from '../modal'
import { ModalProps } from "../modal"
import './index.scss'
import Highlight from '../../components/Highlight'

export default function TaskModal({active, setActive}: ModalProps){
    const [desc, setDesc] = useState<string>('')

    return (
        <Modal title="Adicionar a tarefa"
        active={active}
        setActive={setActive}>

            <input type="text" placeholder="Descrição" value={desc} onChange={e => setDesc(e.target.value)} />

            <Highlight>Dificuldade</Highlight>

            <div id='task-diff'>
                <div className="option">
                    <div className="diff-label">Fácil</div>
                    <div className="diff-desc">
                        10 coins
                        15 xp
                    </div>
                </div>
                
                <div className="option">
                    <div className="diff-label">Médio</div>
                    <div className="diff-desc">
                        20 coins
                        30 xp
                    </div>
                </div>
                
                <div className="option">
                    <div className="diff-label">Difícil</div>
                    <div className="diff-desc">
                        30 coins
                        45 xp
                    </div>
                </div>
            </div>

            <button>Adicionar</button>
        </Modal>
    )
}
