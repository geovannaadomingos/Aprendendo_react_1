import escritoras from "../services/escritoras"
import "../styles/Card.css"

function Card(){
    return(
        <container class="container_card">
            {escritoras.map((escritora)=>{
                return (
                    <div class="card">
                        <h2 class="titulo_card">{escritora.nome}</h2>
                        <div class="div_imagem_card">
                            <img class="imagem_card" src={escritora.perfil} alt={escritora.nome}/>
                        </div>
                        <h4 class="p_obras_card">Principais Obras:</h4>
                        <ul class="ul_card">
                            {escritora.principaisObras.map((obra)=>{
                                return(
                                    <li class="li_card">{obra}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </container>
    );
}
export default Card