import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";
import TaskModal from "../../modal/TaskModal";
import GoalModal from "../../modal/GoalModal";

import { useEffect, useState } from "react";
import "./style.scss";
import { Goal, Task } from "../../types/types";

export default function Tasks() {
	const [taskModal, handleTaskModal] = useState<boolean>(false);

	const [goalModal, handleGoalModal] = useState<boolean>(false);

	const [goalsList, setGoals] = useState([] as Goal[]);

	const [tasksList, setTasks] = useState([] as Task[]);

	function removeTask(id: number) {
		const updatedTasks = tasksList
			.slice(0, id)
			.concat(tasksList.slice(id + 1));
		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
	}

	function removeGoal(id: number) {
		const updatedGoals = goalsList
			.slice(0, id)
			.concat(goalsList.slice(id + 1));
		setGoals(updatedGoals);
		localStorage.setItem("goals", JSON.stringify(updatedGoals));
	}

	function completeTask(id: number){
		const updatedTasks = tasksList.map((task, index) => {
			if (index === id) {
				return { ...task, completed: true };
			}
			return task;
		});
	
		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
	}
	
	function completeGoal(id: number){
		const updatedGoals = goalsList.map((goal, index) => {
			if (index === id) {
				return { ...goal, completed: true };
			}
			return goal;
		});
	
		setGoals(updatedGoals);

		removeGoal(id);
	}

	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem("tasks")!));
	}, [localStorage.getItem("tasks")]);

	useEffect(() => {
		setGoals(JSON.parse(localStorage.getItem("goals")!));
	}, [localStorage.getItem("goals")]);

	return (
		<div id="tasks-page">
			<Header />
			<main>
				<section id="leftSec">
					<ProfileSection />

					<div id="objective">
						<h1>Metas</h1>
						<div id="goalList">
							{goalsList != null
								? goalsList.map((goal, index) => {
										return (
											<div
												className="goal"
												key={index}
												title={`XP: ${goal.xp} | Coin: ${goal.coin}`}
											>
												<h3 className="goal-title">
													{goal.description}
												</h3>
												<span> - </span>
												<h3>
													Deadline:{" "}
													{goal.deadline.toLocaleString(
														"pt-BR"
													) || "Indefinido"}
												</h3>
												<h3>XP: {goal.xp}</h3>
												<h3>Coin: {goal.coin}</h3>
												
												{goal.completed ? undefined :
													<span 
													className="check-btn" 
													onClick={() => completeGoal(index)}>
														✔
													</span>
												}

												<button
													className="remove-btn"
													onClick={() =>
														removeGoal(index)
													}
												>
													-
												</button>
											</div>
										);
								})
							: null}
						</div>
						<button onClick={() => handleGoalModal(true)}>+</button>
					</div>
				</section>

				<section id="rightSec">
					<h1>Tarefas</h1>
					<div id="taskList">
						{tasksList != null
							? tasksList.map((task, index) => {
									let routine, diff;
									switch (task.routine) {
										case undefined:
											routine = "Diario";
											break;
										case 0:
											routine = "Diario";
											break;
										case 1:
											routine = "Semanal";
											break;
										case 2:
											routine = "Mensal";
											break;
									}

									switch (task.difficulty) {
										case undefined:
											diff = "Facil";
											break;
										case 0:
											diff = "Facil";
											break;
										case 1:
											diff = "Medio";
											break;
										case 2:
											diff = "Dificil";
											break;
									}

									return (
										<div style={task.completed ? {border: "2px solid green"} : {}}
											className="task"
											key={index}
											title={`Dificuldade: ${diff}`}
										>
											<h3 className="task-title">
												{task.description}
											</h3>
											<span> - </span>
											<h3>
												{routine} | {diff}
											</h3>

											{task.completed ? undefined :
											<span className="check-btn" 
											onClick={() => completeTask(index)}>✔</span>}

											<button
												className="remove-btn"
												onClick={() =>
													removeTask(index)
												}
											>
												-
											</button>
										</div>
									);
							  })
							: null}
					</div>

					<button onClick={() => handleTaskModal(true)}>+</button>
				</section>
			</main>

			<TaskModal active={taskModal} setActive={handleTaskModal} />
			<GoalModal active={goalModal} setActive={handleGoalModal} />
		</div>
	);
}
