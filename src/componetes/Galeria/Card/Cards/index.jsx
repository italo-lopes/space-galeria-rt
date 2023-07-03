import React from "react";
import open from "./open.png";
import favorito from "./favorito.png";

const Cards = ({ fotos, style }) => {
  return (
    <li className={style.galeria__card}>
      <img
        className={style.galeria__imagem}
        src={fotos.imagem}
        alt={fotos.tag}
      />
      <p className={style.galeria__descricao}>{fotos.titulo} </p>
      <div>
        <p>{fotos.creditos}/satélite</p>
        <span>
          <img src={favorito} alt="favoritar" />
          <img src={open} alt="abrir" />
        </span>
      </div>
    </li>
  );
};

export default Cards;
//  {/* <img className={style.galeria__imagem} src={foto}  alt ='italo'/> */}
