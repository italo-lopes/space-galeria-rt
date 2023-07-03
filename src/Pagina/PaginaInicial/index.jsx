// logica da pgina inicial  
import  style  from './PaginaInicial.module.scss'
import Header from "componetes/Header"
import Menu from 'componetes/Menu'
import Banner from 'componetes/Banner'
import Footer from 'componetes/Footer'    
import Galeria from 'componetes/Galeria'
import Popular from 'componetes/Galeria/Popular'
// import Popular from '../../componetes/Galeria/Popular'

// gracas ao jsconfig.json posso tirar os ../.. pq ele explica que src é a minha pasta raiz

function PaginasInicial(){
    const pegar = <h6 className={style.pagina__inicial}>PaginaInicial</h6> 
    // usando o jsx + js precisa ta na extensao jsx
   // const menuBanner = <h6 className={style.pagina__inicial}>Menu + Banner</h6> 

    return(
        <>
            {pegar}
            <Header/>
            <main>
                <section  className={style.principal}>
                    <Menu/>
                    <Banner/>   
                </section>
                <section className={style.galeria}>
                <Galeria />
                <Popular/>
                </section>

            </main>
            <Footer/>
        </>
    )   
}

export default  PaginasInicial
//semanticamente - header-main-section-nav-banner