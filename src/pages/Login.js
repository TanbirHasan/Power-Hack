import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SetLoginuser } from '../App';

const Login = () => {
  const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setLoginuser = useContext(SetLoginuser)


    async function loginUser(event) {
      event.preventDefault();

      const response = await fetch("http://localhost:7000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.user) {
        localStorage.setItem("token", data.user);
        alert("Login successful");
        setLoginuser(true)
        navigate("/")
        
      } else {
        alert("Please check your username and password");
      }
    }
    return (
      <div className="flex flex-col items-center ">
        <h1 className="text-xl font-semibold text-center">Login</h1>
        <form onSubmit={loginUser} className="border-2 border-solid px-3 py-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-solid my-2"
            id="form-input"
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-solid my-2"
            id="form-input"
            type="password"
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" className="btn btn-success" />
        </form>
      </div>
    );
};

export default Login;