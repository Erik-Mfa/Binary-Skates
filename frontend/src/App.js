import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { isAdmin, isAuthenticated } from './services/auth';
import RoutesConfig from './routes';

const admin = isAdmin();
if(admin){ console.log("NO APP TMB TA VOLTANDO")}
const authenticated = isAuthenticated();

function App() {
  return (
    <Router>
      {/* passing the results of the authentication to the routes file */}
      <RoutesConfig checkAdmin={admin} checkAuthenticated={authenticated}/> 
    </Router>     
  );
}

export default App;