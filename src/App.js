import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import BillingPage from './components/BillingPage';
import { createContext, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Form from './components/Form';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';




export const SetUser = createContext()
export const User = createContext()
export const SetLoginuser = createContext()
export const Loginuser = createContext()


function App() {

  const [user ,setUser] = useState([])
  const [loginuser,setLoginuser] = useState(false)
  return (
    <div className="App">
      <SetUser.Provider value={setUser}>
        <User.Provider value={user}>
          <SetLoginuser.Provider value={setLoginuser}>
            <Loginuser.Provider value={loginuser}>
              <Header />

              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>

                <Route path="/form/:id" element={<Form />}></Route>
              </Routes>
            </Loginuser.Provider>
          </SetLoginuser.Provider>
        </User.Provider>
      </SetUser.Provider>
    </div>
  );
}

export default App;
