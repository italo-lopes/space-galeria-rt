import style from './Menu.module.scss'
// import maisCurtidasInativo from '../../assets/icones/mais-curtidas-inativo.png'
// import maisVistasInativo from '../../assets/icones/mais-vistas-inativo.png' 
// import novasInativo from '../../assets/icones/novas-inativo.png'
// import surpreendaMeInativo from '../../assets/icones/surpreenda-me-inativo.png'

import icones from './icones.json'
import Icones from "../Icones"
const Menu = ()=>{

    return(
        <nav className={style.menu}>
            <ul className={style.menu__lista} >

                {icones.map(itens => 
                <Icones 
                key ={itens.id}
                style={style}
                item={itens}
                /> )}
                {/* <li className={style.menu__item}>
                    <img src={homeAtivo} alt=""/> 
                    <a href='http://github.com/italo-lopes.png'>Início</a>
                </li>

                <li className={style.menu__item}>
                    <img src={maisVistasInativo} alt=""/>   
                    <a href='/'>Mais vistas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={maisCurtidasInativo} alt=""/> 
                    <a href='/'>Mais curtidas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={novasInativo} alt=""/> 
                     <a href='/'>Novas</a>
                </li>  
                <li className={style.menu__item} >
                    <img src={surpreendaMeInativo} alt=""/> 
                    <a  href='/'>Surpreenda-me</a>
                </li>   */}
            </ul>
        </nav>
    )
}

export default Menu;