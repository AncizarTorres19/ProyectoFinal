import React, {createContext, useState, useEffect} from 'react';
import axios from "axios";


//crear el context

export const RazasContext = createContext();

// provider es donde se encuentran las funciones y state
const RazasProvider = (props)=> {
    

    // crear es state del conext
   const [razas, setRazas] = useState([]);
     
   
   // llamado a la api
    useEffect(() => {
        const obtenerRazas = async () =>{
            const url ='https://dog.ceo/api/breeds/list/all';

            const razas = await axios.get(url);

            setRazas(razas.data.message);
        }
        obtenerRazas();
    }, []);

    return(
        <RazasContext.Provider
        value ={{
            razas 
            
        }}

        >
            {props.children}
        </RazasContext.Provider>
    )
}


export default RazasProvider;