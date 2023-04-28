import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
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
  
      console.log('data:', data)
      console.log('error:', error)
    
      if (error) {
        toast.error('An error occurred while logging in', { autoClose: 5000 })
      } else if (!data) {
        toast.error('Invalid username or password', { autoClose: 5000 })
      } else {
        toast.success('Logged in successfully!', { autoClose: 5000 })
        navigate('/dashboard');

        // Redirect to dashboard or home page
      }
  }

  return (
    <div className="container mt-5">
        <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="sr-only">
        Username:
          <input className="form-control mb-3"
            type="text"
            value={userName}
            onChange={handleUsernameChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <button className="form-submit" type="submit">Log in</button>

        <p>
          Don't have an account? <Link to="/signupform">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
