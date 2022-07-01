import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import BillingPage from './components/BillingPage';
import { createContext, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Form from './components/Form';
import Home from './pages/Home';



export const SetUser = createContext()
export const User = createContext()


function App() {

  const [user ,setUser] = useState([])
  return (
    <div className="App">
      <SetUser.Provider value={setUser}>
        <User.Provider value={user}>
          <Header />
          

          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
         
            <Route path="/form/:id" element={<Form/>}></Route>
          </Routes>
        </User.Provider>
      </SetUser.Provider>
    </div>
  );
}

export default App;
