import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import google from '../img/google.png';
import facebook from '../img/facebook.png';
import {useHistory} from "react-router-dom";
import Menuu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Menu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [dropdown ,setDropdown]=useState(false);
  let history = useHistory();
  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }

  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem('token',JSON.stringify(response))
    history.push("/Buscadores")
  }

  const responseFacebook = (response) => {
    console.log(response);
    localStorage.setItem('token',JSON.stringify(response))
    history.push("/Buscadores")
  }

  return (


    <>
     <Menuu 
       
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
        
        <GoogleLogin
                clientId="82938787030-vqm4j9po6qs5ku1ir31ficekkflinjct.apps.googleusercontent.com"
                render={renderProps => (
                  
                  <button className="Bontgoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}><img className="google" src={google} />Iniciar sesion</button>
                )}
              

                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
  />

        </MenuItem>

        <MenuItem>
                  
                  <FacebookLogin
              appId="492612431975822"
              render={renderProps => (
                  
                <button className="Bontfacebook" onClick={renderProps.onClick} disabled={renderProps.disabled}><img className="facebook" src={google} /> Hola </button>
              )} 
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              icon={<img className="facebook" src={facebook} />}
            />
                  
        </MenuItem>
        
      </Menuu>

      <button  className="calormenu"  onClick={handleClick} >LOGIN</button>

      </>

  //   <div className="Menuu">
  // <br></br>
  //     <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        
  //       {/* <DropdownToggle caret>
  //           Iniciar Sesión
  //       </DropdownToggle> */}
        
  //       <div className="lista">
  //     <DropdownMenu>
      
      
  //     <li >  
  //         <GoogleLogin
  //               clientId="82938787030-vqm4j9po6qs5ku1ir31ficekkflinjct.apps.googleusercontent.com"
  //               render={renderProps => (
                  
  //                 <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img className="google" src={google} />Iniciar sesion</button>
  //               )}
              

  //               onSuccess={responseGoogle}
  //               onFailure={responseGoogle}
  //               cookiePolicy={'single_host_origin'}
  // /></li>
  

    

  //   <li>
  //     <FacebookLogin
  //   appId="492612431975822"
  //   render={renderProps => (
        
  //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img className="google" src={google} /> </button>
  //   )} 
  //   fields="name,email,picture"
  //   callback={responseFacebook}
  //   cssClass="my-facebook-button-class"
  //   icon={<img className="facebook" src={facebook} />}
  // />
  //     </li>

    
      

  //        </DropdownMenu>
  //        </Dropdown> 
         
          

          
     
   
    
  );
}

export default Menu;