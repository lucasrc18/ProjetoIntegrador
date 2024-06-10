import Modal from '../modal'
import { useState } from 'react'
import { ModalPresetType } from "../modal"
import Highlight from '../../components/Highlight'

import './index.scss'

export default function TaskModal({active, setActive}: ModalPresetType){
    const [desc, setDesc] = useState<string>('')

    return (
        <Modal title="Adicionar a tarefa"
        id="task-modal"
        active={active}
        setActive={setActive}>

            <div id="task-desc">
                <input type="text" placeholder="Descrição" value={desc} onChange={e => setDesc(e.target.value)} />
            </div>

            <Highlight id="diff-label">Dificuldade</Highlight>

            <div id='task-diff'>
                <div className="option">
                    <div className="diff-label">Fácil</div>
                    <div className="diff-desc">
                        10 coins <br />
                        15 xp
                    </div>
                </div>
                
                <div className="option">
                    <div className="diff-label">Médio</div>
                    <div className="diff-desc">
                        20 coins <br />
                        30 xp
                    </div>
                </div>
                
                <div className="option">
                    <div className="diff-label">Difícil</div>
                    <div className="diff-desc">
                        30 coins <br />
                        45 xp
                    </div>
                </div>
            </div>

            <p id="task-add">Adicionar</p>
        </Modal>
    )
}
