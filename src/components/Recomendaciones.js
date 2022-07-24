import React, { useState, useEffect } from "react"
import RecomendacionFragment from "./Fragments/RecomendacionFragment"
import jolteon from "../assets/images/jolteon.jpg"



const Recomendaciones = () => {

    return (
      <>
        <div className="container">
           <div className="row">
              <div className="col-12">
                 <h1>Descripciones</h1>
                 </div>
                </div>
            <div className="row">
               <div className="col-6">
               <RecomendacionFragment
               titulo="Tabla de Descripción"
               tipoAlerta="alert-danger">
                  
         <table class="table">
           <thead>
            <tr>
            <th scope="col">Generación</th>
            <th scope="col">Tipo</th>
            <th scope="col">Peso</th>
            <th scope="col">Altura</th>
         </tr>
         </thead>
         <tbody>
            <tr>
            <th scope="row">Primera Generación</th>
            <td>Eléctrico</td>
            <td>24.5kg</td>
            <td>0.8m</td>
            </tr>
         </tbody>
         </table>
             
              
               
               </RecomendacionFragment>
            </div>  
            <div className="col-6">
            <RecomendacionFragment
               titulo="Jolteon"
               tipoAlerta="alert-success">
               Contenido 2
               <br/>
               <img src={jolteon} alt="jolteon"/>
            </RecomendacionFragment>
            
               
            </div>
          </div>
        </div>
           
            
          
        

            




           
            
            
          
            
        </>

        )
        



}

export default Recomendaciones