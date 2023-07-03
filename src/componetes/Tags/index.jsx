import React from 'react';
import style from './Tags.module.scss'
//import tags from './tags.json'


const Tags = (props) => {
    



    return (  
        <div className={style.tags}>
            <p>Busque por tags:</p>
            <ul className = {style.tags__lista}>
                {props.tags.map((item,index) => <li key = {index} onClick={()=>props.tipoCategoria(item) } >{item}</li> )}
                <li onClick={props.pegar} >todos</li>
            </ul>
        </div>
    );
}
 
export default Tags;