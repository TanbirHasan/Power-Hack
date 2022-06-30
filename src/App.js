import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import BillingPage from './components/BillingPage';
import { createContext, useState } from 'react';


export const SetUser = createContext()
export const User = createContext()


function App() {

  const [user ,setUser] = useState([])
  return (
    <div className="App">
   
      <SetUser.Provider value={setUser}>
        <User.Provider value={user}>
          <Header />
          <BillingPage />
        </User.Provider>
      </SetUser.Provider>
    </div>
  );
}

export default App;
