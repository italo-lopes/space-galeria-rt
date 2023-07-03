import React from "react";
import Tags from "../Tags";
import style from "./Galerias.module.scss";
import fotos from "./fotos.json";
import { useState } from "react";

import Card from "./Card";
//import Popular from "./Popular";

//assim eu tenho o obj na variavel fotos
//fotos.json
const Galeria = () => {
// usado array no escopo 
    const tags = [
        {
            id: 1,
            nome:"Galáxias"
        },
        {
            id: 2,
            nome:"Lua"
        },
        {
            id: 3,
            nome:"Estrelas"
        },
        {
            id: 4,
            nome:"Nebulosas"
        }
    ]

  const  [todasAsFotos,setFotos] =  useState(fotos)
  const tagsUnica = [...new Set(fotos.map(item=>item.tag))]
  // set em array ...
  // set é um tipo de dado eu vou pegar cada favor do set e colocar no array
  // entao [ set1,set2,set3] usado para copia / add / transformar dado  
  const tagsUnica2 = [...fotos.map(item=>item)]
  // ... -> pega cada item e joga em um array unico.

  console.log(tagsUnica)
  console.log("------- antes espanhar")
  console.log(fotos)
console.log("-------depois espanhar")
  console.log(tagsUnica2)


  const pegar= ()=>{
    console.log(todasAsFotos)
    //setFotos((anterior)=>{ return ( anterior.filter(item=> item.id === '9' ))})
        setFotos(fotos)
  }
   const tipoCategoria = (categoria)=>{
        setFotos(fotos.filter(item=> item.tag === categoria ))
   }

  return(
    <section className={style.galeria}>
        <h2>Navegue pela galeria</h2>
        <div className={style.fotos}> 
            <div>
            <Tags 
                pegar={pegar}
                tags= {tagsUnica}
                tipoCategoria={tipoCategoria}
            />
                <button onClick={pegar} >todos</button>
                {tags.map(item => <button key = {item.id} onClick={()=>tipoCategoria(item.nome)} >{item.nome}</button> )}
                <Card
                    style={style}
                    fotosv = {todasAsFotos}
                />
            </div>
            {/* <Popular/> */}
        </div>
    </section>
  );    
};

export default Galeria;
