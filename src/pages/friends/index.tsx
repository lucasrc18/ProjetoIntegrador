import { FaMagnifyingGlass as SearchIcon } from "react-icons/fa6";

import Header from "../../components/Header";

import "./style.scss";

export default function Friends() {
	return (
		<div id="friends-page">
			<Header />
            <main>
              <section>
                <div id="serachBar">
                    <SearchIcon /> 
                    <input /> 
                </div>
              </section>
            </main>
		</div>
	);
}
