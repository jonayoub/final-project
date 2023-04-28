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
    <div className="form-container">
      <h1>Sign Up</h1>
    <form onSubmit={handleSignup}>
      <label>
        Username:
        <input type="text" value={userName} onChange={handleUsernameChange} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <button className="form-submit"  type="submit">Sign up</button>

      <p>
         <Link to="/">Back to login</Link>
        </p>
    </form>
      </div>
  )
}

export default SignUpForm;
