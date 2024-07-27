import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useNavigate } from 'react-router-dom';

function Toggle() {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'left', padding: '20px' ,backgroundColor:'#f8f9fa'}}>
        <button  
          onClick={() => setShowLogin(true)} 
          style={{ 
            padding: '10px 20px', 
            margin: '0 10px', 
            cursor: 'pointer',
            backgroundColor: showLogin ? '#000' : '#ccc', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px' 
          }}
        >
          Login
        </button>
        <button 
          onClick={() => setShowLogin(false)} 
          style={{ 
            padding: '10px 20px', 
            margin: '0 10px', 
            cursor: 'pointer',
            backgroundColor: !showLogin ? '#000' : '#ccc', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px' 
          }}
        >
          Register
        </button>
      </div>
      {showLogin ? <LoginForm handleLogin={handleLogin}/> : <RegisterForm />}
    </div>
  );
}

export default Toggle;