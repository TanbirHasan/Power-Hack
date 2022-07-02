import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Loginuser, SetLoginuser } from '../App';


const Header = () => {
  const loginuser = useContext(Loginuser)
  const setLoginuser = useContext(SetLoginuser)


  const hanldlelogout = () => {

    localStorage.removeItem("token");
    setLoginuser(false);
    

  }


  // const handlelogout = () => {
  //   localStorage.removeItem("token")
  //   window.location.reload()
  // }
    return (
      <div className="bg-current py-3">
        <div className="flex justify-between px-10">
          <Link to="/">
            <h2 className="text-4xl bold text-white">Home</h2>
          </Link>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Paid Total : 0
            </h3>
            {loginuser ? (
              <span></span>
            ) : (
              <Link to="/register">
                <button className="btn btn-success">Register</button>
              </Link>
            )}

            {loginuser ? (
              <button className="btn btn-success mx-2" onClick={hanldlelogout}>Logout</button>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;