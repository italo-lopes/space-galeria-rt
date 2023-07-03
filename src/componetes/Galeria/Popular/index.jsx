import React from "react";
import style from "./Popular.module.scss";
import fotos from "./fotos-populares.json";

const Popular = () => {
  return (
    <aside className={style.populares}>
      <h2>Popular</h2>
      <ul className={style.populares__imagens}>
        {fotos.map((itens) => (
            <li key={itens.id} >
                <img src={itens.path} alt={itens.alt}/>
            </li>
        ))}
      </ul>
      <button>Ver mais</button>
    </aside>
  );
};

export default Popular;
