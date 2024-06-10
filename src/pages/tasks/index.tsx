import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";
import TaskModal from "../../modal/TaskModal";
import GoalModal from "../../modal/GoalModal";

import Database from "../../services/database";
import { useState } from "react";
import "./style.scss";
import { Goal, Task } from "../../types/types";

export default function Tasks() {
    const [taskModal, handleTaskModal] = useState<boolean>(false);

    const [goalModal, handleGoalModal] = useState<boolean>(false);

    const [goalsList, setGoals] = useState([] as Goal[]);

    const [tasksList, setTasks] = useState([] as Task[]);

    const { once } = Database;

    once("tasks", snapshot => {
        if(snapshot.exists())
            setTasks(snapshot.val());
    })

    once("goals", snapshot => {
        if(snapshot.exists())
            setTasks(snapshot.val());
    })

	return (
		<div id="tasks-page">
			<Header />
            <main>
                <section id="leftSec">
                    <ProfileSection />
                    
                    <div id="objective">
                        <h1>Metas</h1>
                        <button onClick={() => handleGoalModal(true)}>+</button>
                    </div>
                </section>

                <section id="rightSec">
                    <h1>Tarefas</h1>
                    <div id="taskList">{
                        tasksList.map((task, index) => {
                            let rotina, dificuldade;
                            switch(task.rotina){
                                case undefined: 
                                    rotina = "Diario";
                                    break;
                                case 0: 
                                    rotina = "Diario";
                                    break;
                                case 1: 
                                    rotina = "Semanal";
                                    break;
                                case 2:
                                    rotina = "Mensal";
                                    break;
                            }

                            switch(task.difficulty){
                                case undefined:
                                    dificuldade = "Facil";
                                    break;
                                case 0:
                                    dificuldade = "Facil";
                                    break;
                                case 1:
                                    dificuldade = "Medio";
                                    break;
                                case 2:
                                    dificuldade = "Dificil";
                                    break;

                            }
                            
                            return (
                                <div key={index}>
                                    <h1>{task.description}</h1>
                                    <span>-</span>
                                    <h3>{rotina}</h3>
                                    <span>-</span>
                                    <h3>{dificuldade}</h3>
                                </div>
                            )})
                    }</div>

                    <button onClick={() => handleTaskModal(true)}>+</button>
                </section>
            </main>

            <TaskModal active={taskModal} setActive={handleTaskModal} />
            <GoalModal active={goalModal} setActive={handleGoalModal} />
		</div>
	);
}
