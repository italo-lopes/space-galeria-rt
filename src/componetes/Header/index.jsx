// usar tag semantica jsx para constuir 
import './Header.css'
const Header = ({type='search', src='#',alt='imagem erro', placeholder='O que vc procura' ,valor})=>{

    const aoAlterar =(e)=>{
            console.log(e.target.value);
            valor = e.target.value
    }
    
    const aoClick =()=>{
            console.log(valor);
    }

    return(
        <header className = 'header'>
            <img className = 'header__img' src={src} alt={alt}/>
            <div className = 'header__busca'>
                <input className = 'header__busca__input' type={type} onChange={aoAlterar} placeholder={placeholder} />
                <button className = 'header__busca__button' onClick={aoClick}>lupa</button>
            </div>
        </header>
    )
}

export default Header