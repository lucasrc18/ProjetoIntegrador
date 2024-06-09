import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";

import "./style.scss";

export type Metas = {
    id: number,
    title: string,
    amount: number,
    XP: number
}

export default function Tasks() {
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
                    <button>+</button>
                </section>
            </main>
		</div>
	);
}
