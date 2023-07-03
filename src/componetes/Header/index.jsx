// usar tag semantica jsx para constuir 
// importar img da propia pasta e colocar uma variavel como nome    
//import './Header.css' -meu proprio
import  style from './Cabecalho.module.scss'
import logo from './logo-italo.png'
import busca from './search.png'
const Header = ({type='search',alt='imagem erro', placeholder='O que vc procura' ,valor})=>{

    const aoAlterar =(e)=>{
            console.log(e.target.value);
            valor = e.target.value
    }
    /*  
    const aoClick =()=>{
        console.log(valor);
    }
    */
    return(
        <header className = {style.cabecalho}> 
            <img className = {style.cabecalho__logo}  src={logo} alt={alt}/>
            <div className = {style.cabecalho__container}>
                <input 
                    className = {style.cabecalho__input} 
                    type={type}
                    onChange={aoAlterar} 
                    placeholder={placeholder} 
                />
                {/* <button className = 'header__busca__button' onClick={aoClick}>lupa</button> */}
                <img className ='header__busca__button'  src={busca} alt='incone de lupa'/>
            </div>
        </header>
    )
}

export default Header

/*       
 <header className = 'header'> 
            <img className = 'header__img' src={logo} alt={alt}/>
            <div className = 'header__busca'>
                <input 
                    className = 'header__busca__input' 
                    type={type}
                    onChange={aoAlterar} 
                    placeholder={placeholder} 
                />
               
                <img className ='header__busca__button'  src={busca} alt='incone de lupa'/>
            </div>
        </header>
 sem o scss -module
 */