import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { Link } from 'react-router-dom';
import "./LoginForm.css";




function LoginForm() {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('userName', userName)
      .eq('password', password)
      .single()
    
      if (error) {
        toast.error('An error occurred while logging in', { autoClose: 5000 })
      } else if (!data) {
        toast.error('Invalid username or password', { autoClose: 5000 })
      } else {
        toast.success('Logged in successfully!', { autoClose: 5000 })
        navigate('/dashboard');

      }
  }

  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h1 className="h3 mb-3 font-weight-normal text-center">Please Login</h1>
          <form onSubmit={handleSubmit}>
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
              Log in
            </button>
    
            <p className="mt-3">
              Don't have an account? <Link to="/signupform">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
  </div>
  
  );
}

export default LoginForm;
