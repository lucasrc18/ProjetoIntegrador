import { useState } from 'react';
import Modal, { ModalPresetType } from '../modal'
import MoneyIcon from '../../components/assets/MoneyIcon.png';

import './index.scss'	

export default function GoalModal({active, setActive}: ModalPresetType) {
    const [desc, setDesc] = useState<string>('');
    const [deadline, setDeadline] = useState<string>('');
    
    const [xp, setXP] = useState<Number | undefined>(undefined);
    const [coin, setCoins] = useState<Number | undefined>(undefined);
    
    return (
        <Modal title="Adicionar meta"
        id="goal-modal" active={active}
        setActive={setActive}>

            <div id="goal-desc" className="div-inp">
                <input type="text" placeholder="Descrição" value={desc} onChange={e => setDesc(e.target.value)} />
            </div>

            <div id="goal-deadline" className="div-inp">
                <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
            </div>

            <div id="goal-rewards">
                <div id="goal-xp">
                    <div>XP</div>

                    <input type="number" id="xp-inp" value={String(xp) || ""} onChange={e => setXP(Number(e.target.value) || undefined)} placeholder="Digite o xp" />
                </div>

                <div id="goal-coin">
                    <img src={MoneyIcon} alt="Icone de moedas" />

                    <input type="number" id="coin-inp" value={String(coin) || ""} onChange={e => setCoins(Number(e.target.value) || undefined)} placeholder="Digite as moedas"  />
                </div>
            </div>

            <p id="goal-add">Adicionar</p>

        </Modal>
    );
}