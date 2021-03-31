import React from 'react';
import Inicio from './pages/Inicio';
import Buscadores from './pages/Buscadores';
import Final from './pages/Final';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom"; 


function App() {

  
  return (


  
    <Router>
      <Switch>
        <Route exact path='/' component={Inicio} />
        <Route path='/Buscadores' component={Buscadores} />
        <Route path='/Final' component={Final} />
      
      </Switch>
    </Router>
    
   


  );
}



export default App;