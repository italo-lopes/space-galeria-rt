import React from 'react';

const Icones = (props) => {
    console.log(props)
    return (
                <li className={props.style.menu__item}>
                    <img src={props.item.path} alt={props.item.alt}/> 
                    <a href='/'>{props.item.link}</a>
                </li>

      );
}
 
export default Icones;