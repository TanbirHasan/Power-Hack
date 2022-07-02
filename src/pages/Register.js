import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function registerUser(event) {
      event.preventDefault();

      const response = await fetch("http://localhost:7000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        navigate("/login");
      }
    }
    return (
      <div className="flex flex-col items-center">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input
            value={name}
            className=" border-2 border-solid py-2 my-1"
            onChange={(e) => setName(e.target.value)}
            id="form-input"
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-solid py-2 my-1"
            id="form-input"
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-solid py-2 my-1"
            id="form-input"
            type="password"
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Register" className="btn btn-success" />
        </form>
      </div>
    );
};

export default Register;