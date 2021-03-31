import React, { Fragment, useState } from "react";
import Buscadors from '../components/Buscadors';
import RazasProvider from '../Context/RazasContext';
import RazasContext from '../Context/RazasContext';
import Headers from '../components/Headers';
import Canasta from '../components/Canasta'
import '../Buscador.css';
import {Link} from "react-router-dom"; 

function Buscador() {


  
    // Funcion que elimina un perro por su id
    const eliminarPerro = id => {
       const nuevosPerros = razaImg.filter(Perro => Perro.id !== id);
       guardarRazaImg(nuevosPerros);
    } 

  // Arreglo de Adopcion 
  const [razaImg, guardarRazaImg] = useState([]);


  //Arreglo  
const crearCarro = Perro => {
  guardarRazaImg([
    ...razaImg,
    Perro
  ])
}



  
  return (
    <RazasProvider>
   <Fragment>
   <Headers/>


   <div className="container">
    <div className="row">
      <div className="one-half column">
   <Buscadors
   crearCarro={crearCarro}
   />
      </div>
      <div className="one-half colum">

<h1>Perros Elegidos</h1>
   {razaImg.map(Perro => (
     <Canasta
        key={Perro.id}
        Perro={Perro}
        eliminarPerro={eliminarPerro}
     />
   ))}

<button 
   className="Continuar"
   ><Link to="/Final" className="Con">Continuar</Link>
    </button>
    </div>
   </div>



</div>
   <RazasContext/>
   </Fragment>
   </RazasProvider>
   
     
  );
} 

export default Buscador;