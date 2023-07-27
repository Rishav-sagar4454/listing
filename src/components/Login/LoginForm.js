import styles from './LoginForm.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Feedback</h1>
       <h2>Add your products and give us your valuable feedback</h2>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <p>Don't have an account?<nav><Link to="/SignUp">Sign up</Link></nav></p>
      <button type="submit">Log in</button>
      
    </form>
    </div>
  );
};

export default LoginForm;
