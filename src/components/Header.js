import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {


  // const handlelogout = () => {
  //   localStorage.removeItem("token")
  //   window.location.reload()
  // }
    return (
      <div className="bg-current py-3">
        <div className="flex justify-between px-10">
          <h2 className="text-4xl bold text-white">Logo</h2>
          <h3 className="text-2xl font-semibold text-white">Paid Total : 0</h3>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    );
};

export default Header;