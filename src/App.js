import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <Router>
      
     
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route path="/signupform" element={<SignUpForm/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
     
    
    </Router>
  );
}
export default App;
