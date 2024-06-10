import Modal from '../modal'
import { useState } from 'react'
import { ModalPresetType } from "../modal"
import Highlight from '../../components/Highlight'

import CoinIcon from "../../components/assets/MoneyIcon.png";

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
                        <div className="coin">10 <img src={CoinIcon} alt="Icone de moedas" /></div>
                        15 xp
                    </div>
                </div>
                
                <div className="option">
                    <div className="diff-label">Médio</div>
                    <div className="diff-desc">
                        <div className="coin">20 <img src={CoinIcon} alt="Icone de moedas" /></div>
                        30 xp
                    </div>
                </div>
                
                <div className="option">
                    <div className="diff-label">Difícil</div>
                    <div className="diff-desc">
                        <div className="coin">30 <img src={CoinIcon} alt="Icone de moedas" /></div>
                        45 xp
                    </div>
                </div>
            </div>

            <p id="task-add">Adicionar</p>
        </Modal>
    )
}
