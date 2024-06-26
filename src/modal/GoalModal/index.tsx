import { useEffect, useState } from 'react';
import Modal, { ModalPresetType } from '../modal'
import MoneyIcon from '../../components/assets/MoneyIcon.png';

import useAuth from '../../hooks/useAuth';

import './index.scss'	
import { useNavigate } from 'react-router-dom';
import { push, set } from 'firebase/database';

export default function GoalModal({active, setActive}: ModalPresetType) {
    const [desc, setDesc] = useState<string>('');
    const [deadline, setDeadline] = useState<string | undefined>(undefined);
    
    const [xp, setXP] = useState<Number | undefined>(undefined);
    const [coin, setCoins] = useState<Number | undefined>(undefined);
    
    const { user, loadingUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if(active){
            setDesc("");
            setDeadline(undefined);
            setXP(undefined);
            setCoins(undefined);
        }
    }, [active])

    function addGoal() {
        if (!xp || !coin || desc === "") {
            alert("Preencha todos os campos");
            return;
        }
        
        if (loadingUser && !user.uid) {
            alert("Por favor, aguarde alguns instantes");
            return;
        } 
    
        if (!user.uid && !loadingUser) {
            alert("Por favor faça um login primeiro");
            navigate("/login");
            return;
        }
    
        const newGoal = {
            description: desc, 
            deadline: deadline, 
            xp: xp,
            coin: coin
        };
    
        let existingGoals: any = localStorage.getItem("goals");
    
        if (existingGoals) {
            try {
                existingGoals = JSON.parse(existingGoals);
                if (Array.isArray(existingGoals)) {
                    existingGoals.push(newGoal);
                } else {
                    existingGoals = [newGoal];
                }
            } catch (e) {
                console.error("Erro ao parsear goals do localStorage:", e);
                existingGoals = [newGoal];
            }
        } else {
            existingGoals = [newGoal];
        }
    
        localStorage.setItem("goals", JSON.stringify(existingGoals));
        setActive(false);
    }

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

            <p id="goal-add" onClick={addGoal}>Adicionar</p>

        </Modal>
    );
}