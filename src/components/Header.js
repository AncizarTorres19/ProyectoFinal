import React from 'react';
import Icono from './Icono';
import Menu from './Menu';



const Header = () => {
   // const token = //consulta al localStorage
    return ( 

        <header>
            <div className="Menuu">
            <div className="MenuDos">
            <Icono/>
            </div>
            <Menu/>
            </div>
        </header>


     );
}
 
export default Header;