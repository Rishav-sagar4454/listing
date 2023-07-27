import {BrowserRouter , Routes , Route} from 'react-router-dom'
import React from 'react';
import LoginForm from './components/Login/LoginForm';
import SignUpForm from './components/SignUp/SignUpForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
       
       <Routes>
       <Route path='/' element={<LoginForm/>}/>
       <Route path='/SignUp' element={<SignUpForm/>}/>
      {/* <LoginForm />
      <SignUpForm /> */}
      </Routes>
      </div>
      </BrowserRouter>
      
  
  );
}

export default App;
