import React, { useState } from "react";
import { FaMagnifyingGlass as SearchIcon, FaTrash as DeleteIcon } from "react-icons/fa6";
import Header from "../../components/Header";
import SocialSection from "../../components/SocialSection";
import "./style.scss";

export default function Social() {
  const [amigos, setAmigos] = useState([
    {
      name: "Paulo Rocha",
      lv: 5,
      money: 124,
      xp: 0.4
    },
    {
      name: "Mike Maluco",
      lv: 10,
      money: 420,
      xp: 0.6
    },
    {
      name: "Jorge Magrão",
      lv: 200,
      money: 2222,
      xp: 0.3
    },
    {
      name: "Ziguiriguidun",
      lv: 237,
      money: 6663,
      xp: 0.2
    }
  ]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseEnter(index: number, event: React.MouseEvent<HTMLDivElement>) {
    setHoveredIndex(index);
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

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

        <section id="socialContainer">
          <h1>Amigos</h1>
          <div id="socialList">
            {amigos.map((amigo, index) => (
              <div
                id="infoSocial"
                key={index}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div id="info">
                  <h2>{amigo.name}</h2>
                  <p>Lv.{amigo.lv}</p>
                </div>
                <button onClick={() => buttonDel(index)}><DeleteIcon /></button>
              </div>
            ))}
          </div>
          {hoveredIndex !== null && (
            <div
              className="balloon"
              style={{ top: mousePosition.y + 10, left: mousePosition.x + 10 }}
            >
              <SocialSection
                username={amigos[hoveredIndex].name}
                xp={amigos[hoveredIndex].xp}
                level={amigos[hoveredIndex].lv}
                money={amigos[hoveredIndex].money}
              />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
