import { FaMagnifyingGlass as SearchIcon, FaTrash as DeleteIcon } from "react-icons/fa6";
import {useState} from "react";

import Header from "../../components/Header";

import "./style.scss";

export default function Social() {

  const [amigos, setAmigos] = useState([
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
  ]);

  function buttonDel(index: number){
    const updateAmigos = [...amigos];
    updateAmigos.splice(index, 1);
    setAmigos(updateAmigos);
  }

	return (
		<div id="social-page">
			<Header />
            <main>
              <section id="searchContainer">
                <div id="searchBar">
                    <SearchIcon id="searchIcon"/> 
                    <input /> 
                </div>
                <div id="resultBox">
                  Nada encontrado!
                </div>
              </section>

              <section id="socialList">
                <h1 id="title">Amigos</h1>
                <div id="linhainformacoes">
                {amigos.map((amigo, index) => (
                    <div key={index}>
                      <h2>{amigo.name}</h2>
                      <p>Lv.{amigo.lv}</p>
                      <button onClick={() => buttonDel(index)}><DeleteIcon /></button>
                    </div>
                ))}
    
                </div>
                
              </section>
            </main>
		</div>
	);
}
