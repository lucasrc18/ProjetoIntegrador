import { FaMagnifyingGlass as SearchIcon, FaTrash as DeleteIcon } from "react-icons/fa6";

import Header from "../../components/Header";

import "./style.scss";

export default function Social() {

  const amigos = [
    {
      name: "Lucas",
      lv: 5
    },
    {
      name: "Italo",
      lv: 10
    },
    {
      name: "julia",
      lv: 200
    },
    {
      name: "kauã",
      lv: 201
    }
  ]

  function buttonDel(){
    
  }

	return (
		<div id="social-page">
			<Header />
            <main>
              <section id="searchContainer">
                <div id="serachBar">
                    <SearchIcon /> 
                    <input /> 
                </div>
                <div id="resultBox">
                  Nada encontrado!
                </div>
              </section>
              <section id="socialList">
                <h1>Amigos</h1>
                {amigos.map((amigo, index) => {
                  return (
                    <div>
                      <h2>{amigo.name}</h2>
                      <p>Lv.{amigo.lv}</p>
                      <button onClick={buttonDel}><DeleteIcon /></button>
                    </div>
                  )
                })}
              </section>
            </main>
		</div>
	);
}
