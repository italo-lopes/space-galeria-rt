import style from './Banner.module.scss'
import banner from './banner.png'
// nao to usando 
const Banner =()=>{
    return(
        <div className={style.banner}>
            <h1>A galeria mais completa de fotos do espaço!</h1>
            <img src={banner} alt='imagem da terra vista do espaço' />
        </div>
    )
}
export default Banner