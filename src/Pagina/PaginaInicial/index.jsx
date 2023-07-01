// logica da pgina inicial  
import Header from "../../componetes/Header"
import './PaginaInicial.css'

// 
function PaginasInicial(){
    const pegar = <h6 className="pagina__inicial">PaginaInicial</h6> // usando o jsx + js precisa ta na extensao jsx

    return(
        <div>
            {pegar}
            <Header/>
        </div>

    )   
}

export default  PaginasInicial