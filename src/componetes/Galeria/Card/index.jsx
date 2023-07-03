import React from "react";
import Cards from "./Cards";

const Card = ({ style, fotosv }) => {
  return (
    <ul className={style.galeria__cards}>
      {fotosv.map((fotos) => (
        <Cards key={fotos.id} fotos={fotos} style={style} />
      ))}
    </ul>
  );
};
export default Card;
