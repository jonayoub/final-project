import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';


function SignUpForm() {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSignup  = async (event) => {
    event.preventDefault()
  
    const { data, error } = await supabase
      .from('users')
      .insert({
        userName: userName,
        password: password,
      });
  
      console.log('data:', data)
      console.log('error:', error)
    
      if (error) {
        toast.error(error.message, { autoClose: 5000 })
      } else {
        toast.success('Sign up successful!', { autoClose: 5000 })
        navigate('/');

      }
    
    
  }

  return (
<div class="d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h1 className="h3 mb-3 font-weight-normal text-center">Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label className="sr-only">
                Username:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={handleUsernameChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label>
                Password:
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </label>
            </div>
    
            <button className="btn btn-primary" type="submit">
              Sign up
            </button>
    
      
            <p className="mt-3">
         <Link to="/">Back to login</Link>
        </p>
          </form>
        </div>
      </div>
  </div>




  
  )
}

export default SignUpForm;
