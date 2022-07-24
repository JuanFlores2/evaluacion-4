import { useState, useEffect } from "react"

const PokemonFragment = ( { imagen, titulo, textoDescripcion, tipoPokemon }) => {

    return (
        <>
        <div className="card" style={{ width:"18rem"}}>
               <img src={imagen} class="card-img-top" alt="..."/>
                     <div className="card-body">
                         <h4 className="card-title">{titulo}</h4>
                         <h6 className="car-title">{tipoPokemon}</h6>
                         <p className="card-text">{textoDescripcion}</p>
                    </div>
        </div>

        </>

        )

        
}

export default PokemonFragment
