import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Account created!');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} style={{ display: 'inline-block', textAlign: 'left' }}>
        <input type="text" placeholder="Username" value={username}
          onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;
