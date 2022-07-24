import React, { useState, useEffect } from "react"
import Charmander from "../assets/images/pokemon1_charmander.jpg"
import Mewtwo from "../assets/images/pokemon2_mewtwo.jpg"
import Sylveon from "../assets/images/pokemon3_sylveon.jpg"
import PokemonFragment from "./Fragments/PokemonFragment"


const Pokemon = () => {

     return (
       <>
        <div className="container">
            <div className="row">
              <div className="col-12">
                 <h1>Pokedex!</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
              <PokemonFragment
                textoDescripcion="Charmander es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola con la punta envuelta en llamas. Charmander, como sus evoluciones Charmeleon y Charizard, tiene una pequeña llama en la punta de su cola. La intensidad con la que esta arde es un indicador del estado físico y emocional de este Pokémon. "
                imagen={Charmander}
                titulo="Charmander"
                tipoPokemon="Tipo Fuego"
              />
        </div>
        
        <div className="col-4">
              <PokemonFragment
                textoDescripcion="Mewtwo es una criatura con una postura humanoide pero con muchos rasgos físicos felinos. El cuerpo de Mewtwo es grisáceo con el vientre púrpura, que se. extiende hasta su larga cola, también púrpura. Mewtwo tiene tres dedos en cada mano con una especie de almohadillas, como las de los animales cuadrúpedos."
                imagen={Mewtwo}
                titulo="Mewtwo"
                tipoPokemon="Tipo Psíquico"
              />
        
      </div>
       
        <div className="col-4">
              <PokemonFragment
                textoDescripcion="Es un Pokémon cuadrúpedo de piel pálida, color blanco. A través de sus apéndices sensitivos con forma de cinta, emite unas ondas tranquilizadoras mediante las cuales detiene los combates. Estos apéndices los enrolla en los brazos de su entrenador cuando caminan juntos."
                imagen={Sylveon}
                titulo="Sylveon"
                tipoPokemon="Tipo Hada"
              />
            </div>
         </div>
      </div>
      
  


        
          
         
     
      
       
        
      </>
       
    )
        


}

export default Pokemon