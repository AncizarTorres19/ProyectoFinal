import React, {Fragment, useState, useEffect} from "react";
import shortid from "shortid";
import swal from 'sweetalert';
import {Link} from "react-router-dom"; 




const Formulario = ({crearFinalizar}) => {

   

    const [finalizar, actualizar] = useState ({
        mascota: "",
        propietario: "",
        telefono : "",
        direccion: "",
        email: "",
      
        
    });

    const [error, actualizarError]= useState(true)
 

  
     const actualizarState = e => {
         actualizar({
             ...finalizar,
             [e.target.name] : e.target.value
         })
     }
 
    const {mascota,propietario,telefono,direccion,email, aceptar, notificacion } = finalizar

    useEffect(() => {
        if (mascota.length && propietario.length && telefono.length && direccion.length && email.length !== 0) {
            actualizarError(false)
        }
        else {
            actualizarError(true) 
        }
        
    }, [finalizar])

    const submitFinalizar = e => {
        e.preventDefault()
    
    
        finalizar.id=shortid();
        
        crearFinalizar(finalizar);

        actualizar({
            mascota: "",
            propietario: "",
            telefono : "",
            direccion: "",
            email: "",
           
           
        })

      
   
    }


    
    const mostrarConfirmacion =()=>{
        swal({
            title:"Envio Exitoso",
            text: "Datos Correctos",
            icon: "success",
            button: "Aceptar"
        });
    }
    const mostrarAlerta =()=>{
        swal({
            title:"Error",
            text: "Todos los campos son obligatorios",
            icon: "error",
            button: "OK"
        });
      
    }

 
    
 
    return(
        <Fragment>
            

          


   <form className="Formu"
          onSubmit={submitFinalizar}>
              <h2>Datos del Responsable</h2>
         
        
       <label>Nombre Mascota</label>
       <input
               type= "text"
               name="mascota"
               className= "u-full-width"
               placeholder="Nombre Mascota"
               onChange= {actualizarState}
               value= {mascota}
               />
               
        
        <label>Nombre Completo del Propietario </label>
       <input
               type= "text"
               name="propietario"
               className= "u-full-width"
               placeholder="Nombre Propietario"
               onChange= {actualizarState}
               value={propietario}/>

        <label>Tel??fono</label>
       <input
               type= "text"
               name="telefono"
               className= "u-full-width"
               placeholder="Tel??fono"
               onChange= {actualizarState}
               value= {telefono}/>

        <label>Direcci??n</label>
       <input
               type= "text"
               name="direccion"
               className= "u-full-width"
               placeholder="Direcci??n"
               onChange= {actualizarState}
               value={direccion}/>
        
        <label>Correo Electr??nico</label>
       <input
               type= "text"
               name="email"
               className= "u-full-width"
               placeholder="Correo Electr??nico"
               onChange= {actualizarState}
               value={email}/>

             <div>
                   <label>
                   <input type="checkbox"
                          name="aceptar"
                          id="terminos"
                          onChange= {actualizarState}
                          value={aceptar} 
                   /> Terminos y Condiciones
                   </label>
               </div>
               <div>
                   <label>
                   <input type="checkbox"
                          name= "notificacion"
                          id= "termino"
                          onChange= {actualizarState}
                        value= {notificacion} 
                   /> Desea recibir informaci??n de nuestra pagina a su correo electr??nico
                   </label>
                  
               </div>

               <div>

               {error 
               ? 
               <button
               className="boton"
               onClick={mostrarAlerta}
               >Enviar</button>
               : 
               <button
               className="boton"
               onClick={mostrarConfirmacion}
               ><Link to="/" className="Con">Enviar</Link></button> 
               }
                       
              </div>
<div>  
</div>
   </form>
   </Fragment>
    );
    }
export default Formulario;


  
