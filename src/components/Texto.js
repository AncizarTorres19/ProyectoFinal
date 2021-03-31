import React from 'react';
import Perro from '../img/Perro.png';

const Texto = () => {
    return (
      <div className= "white-text">
          <img src={Perro} 
          width= '300px'
          height= '300px'
          
         ></img>
        <p>"Los perros son nuestra unión al paraiso. No conocen el mal ni los celos ni el descontento. Sentarse con un perro en la ladera de una montaña en una tarde gloriosa es volver al Edén, donde no hacer nada, no era aburrido: era paz."
         Milan Kundera </p> 
         
         </div>
    );
}

export default Texto;