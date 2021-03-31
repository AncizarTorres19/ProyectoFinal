import React from 'react';

const Canasta = ({Perro, eliminarPerro}) => (
    <div className="perro">
        
        <p> <span> 
                        <img className="img-canasta"
                         name="img"
                         value="img"
                         src={Perro} 
                        /></span></p>

    <button
     className="button eliminar u-full-width"
     onClick={ () =>eliminarPerro(Perro.id)}
    >Eliminar &times;</button>
    </div>
)

export default Canasta;