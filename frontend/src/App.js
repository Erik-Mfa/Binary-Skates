import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes';
import Cookies from 'universal-cookie';

import io from "socket.io-client";

const cookies = new Cookies()
const socket = io.connect("http://localhost:3000")

function App() {  
  return (
    <Router>
      {/* passing the results of the authentication to the routes file */}
      <RoutesConfig/> 
    </Router>     
  );
}

export default App;