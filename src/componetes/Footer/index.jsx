import style from './Footer.module.scss';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
const Footer = () => {
    
    return (
        <footer>
            <ul className={style.lista} >
                <li className={style.lista__item}>
                    <a 
                     href='https://twitter.com/'
                     target="_blank"
                     rel="noreferrer"
                    > 
                        <img src={twitter} alt='o meu twitter'/>
                    </a>
                </li>
                <li className={style.lista__item}>
                    <a 
                    href='https://www.instagram.com/italo_lopes_v2/' 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img src={instagram} alt='o meu instagram'/>
                    </a>
                </li>
                <li className={style.lista__item}>
                    <a href='/' >
                        <img src={facebook} alt='o meu facebook'/>
                    </a>
                </li>   
            </ul>
            <p className={style.texto}>Desenvolvido por Italo</p>
        </footer>
        );
}
 
export default Footer;