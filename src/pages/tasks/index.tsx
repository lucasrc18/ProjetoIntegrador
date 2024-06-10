import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";
import TaskModal from "../../modal/TaskModal";

import { useState } from "react";
import "./style.scss";

export default function Tasks() {
    const [taskModal, handleTaskModal] = useState<boolean>(false);

	return (
		<div id="tasks-page">
			<Header />
            <main>
                <section id="leftSec">
                    <ProfileSection />
                    
                    <div id="objective">
                        <h1>Metas</h1>
                        <button>+</button>
                    </div>
                </section>

                <section id="rightSec">
                    <h1>Tarefas</h1>
                    <button onClick={() => handleTaskModal(true)}>+</button>
                </section>
            </main>

            <TaskModal active={taskModal} setActive={handleTaskModal} />
		</div>
	);
}
