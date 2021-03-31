import React, { useContext, useState } from 'react';
import { RazasContext } from '../Context/RazasContext';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import foto from '../img/foto.png';     


const Buscadors = ({crearCarro}) => {

    const { razas } = useContext(RazasContext);
    const [razaImg, setRazaImg] = useState([foto]);


    const handleChange = e => {
        if (e.target.value !== 'Selec') {
            const razaSearch = e.target.value
            obtenerRaza(razaSearch)
        }
    }
   
    const obtenerRaza = async (raza) => {

        if (raza !== "Selec") {
            const url = `https://dog.ceo/api/breed/${raza}/images/random/1`;

            const razaImg = await axios.get(url);
            setRazaImg(razaImg.data.message);
           
        }

    }

// cuando el usuario adopta el perro 
    const onSubmitAdoptar = e =>{
        e.preventDefault();
        

        // Asignar un ID
        razaImg.id = uuidv4();

        // Crear la adopcion
        crearCarro (razaImg);

    }


    return (
        <form
         onSubmit={onSubmitAdoptar }
        >
            <div className="cuerpo">
                <h2 className="Hola"> Hola Bienvenido,tenemos a tu amigo fiel </h2>
                <div className="cold-md-4">

                    <select onChange={handleChange}
                        className="form-control"

                    >
                        <option className="form-select"  aria-label="Default select example" name="Selec" value="Selec">--Selecciona Raza--</option>
                        ${Object.keys(razas).map(raza => (
                            <option
                            className="form-select"
                            key={raza}
                                value={raza}
                            >{raza}</option>
                        ))}
                    </select>
                    <div className="slide">
                    {setRazaImg
                    ?  
                        <span> 
                        <img className="img-buscador"
                         name="img"
                         value="img"
                         src={razaImg} 
                        /></span>
                      : 
                            null
                      }          
                        </div>
                </div>
                <button type="submit" className="btn btn-warning">Adoptar</button>
            </div>
           
        </form>

    );
}
export default Buscadors;

<img></img>


