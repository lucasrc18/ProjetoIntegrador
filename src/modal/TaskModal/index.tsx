import Modal from '../modal'
import { CSSProperties, useEffect, useState } from 'react'
import { ModalPresetType } from "../modal"
import Highlight from '../../components/Highlight'

import CoinIcon from "../../components/assets/MoneyIcon.png";

import './index.scss'
import useAuth from '../../hooks/useAuth';
import Database from '../../services/database';
import { useNavigate } from 'react-router-dom';

export default function TaskModal({active, setActive}: ModalPresetType){
    const [desc, setDesc] = useState<string>('')
    const [diff, setDiff] = useState<undefined | 0 | 1 | 2>(undefined);
    const [routine, setRoutine] = useState<undefined | 0 | 1 | 2>(undefined);

    const { user, loadingUser } = useAuth();
    const { child, ref, set, get, update, push, once } = Database;

    const navigate = useNavigate();

    const style: CSSProperties = {
        border: "2px solid #ff740a",
        borderRadius: "10px"
    }

    useEffect(() => {
        if(active){
            setDiff(undefined)
            setDesc("")
            setRoutine(undefined)
        }
    }, [active])

    function addTask() {
        if(desc == "") {
            alert("Preencha todos os campos")
            return
        }
        
        if(loadingUser && !user.uid){
            alert("Por favor, aguarde alguns instantes");
            return;
        } 

        if(!user.uid && !loadingUser){
            alert("Por favor faça um login primeiro");
            navigate("/login");
            return;
        }

        const newTask = {
            description: desc, 
            difficulty: diff,
            routine: routine, 
            lastTimeCompleted: new Date().toLocaleDateString("pt-BR")
        }

        const newTaskRef = push(`tasks`);
        set(newTaskRef, newTask);
    }

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
                <div className="option" onClick={() => setDiff(0)} style={(diff == 0) ? style : {}}>
                    <div className="diff-label">Fácil</div>
                    <div className="diff-desc">
                        <div className="coin">10 <img src={CoinIcon} alt="Icone de moedas" /></div>
                        15 xp
                    </div>
                </div>
                
                <div className="option" onClick={() => setDiff(1)} style={(diff == 1) ? style : {}}>
                    <div className="diff-label">Médio</div>
                    <div className="diff-desc">
                        <div className="coin">20 <img src={CoinIcon} alt="Icone de moedas" /></div>
                        30 xp
                    </div>
                </div>
                
                <div className="option" onClick={() => setDiff(2)} style={(diff == 2) ? style : {}}>
                    <div className="diff-label">Difícil</div>
                    <div className="diff-desc">
                        <div className="coin">30 <img src={CoinIcon} alt="Icone de moedas" /></div>
                        45 xp
                    </div>
                </div>
            </div>

            <Highlight id="routine-label">Rotina</Highlight>

            <div id="routine">
                <div className="r-option" onClick={() => setRoutine(0)} style={routine == 0 ? style : {}}>
                    Diário
                </div>

                <div className="r-option" onClick={() => setRoutine(1)} style={routine == 1 ? style : {}}>
                    Semanal
                </div>

                <div className="r-option" onClick={() => setRoutine(2)} style={routine == 2 ? style : {}}>
                    Mensal
                </div>
            </div>

            <p id="task-add" onClick={() => addTask()}>Adicionar</p>
        </Modal>
    )
}
