import React, { Fragment, useState } from 'react'
import Formulario from '../components/Formulario';
import '../Formularios.css';
import Headers from '../components/Headers';
import oww from '../img/oww.jpg';

function Final () {
      
  const  [finaliza, guardaFinaliza]= useState ([]);

  const crearFinalizar = finalizar => {
      guardaFinaliza([finaliza,finalizar]);
  }
        return (
            <Fragment> 
                <Headers/>
         
        <div className ="container">
        <   div className="rom">
                <div className="one-half column"> 
                <img 
                    className="atr"
                    src={oww} 
                   
                ></img> 
                </div>
                <div className="one-half column">
                <div className="container"></div>  
                <div className="row"></div>
                <div className="one-half-column"> 
                <Formulario
                 crearFinalizar= {crearFinalizar}/>
                </div>
                </div>
                 </div>
                 </div> 
                
            </Fragment>
            );
        } 

export default Final


