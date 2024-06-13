import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header.js";
import "./Header.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const data = { email, password };

  const HandelSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5059/api/users/login", data)
      .then((res) => {
        setMessage(res.data.message);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setEmail("");
    setPassword("");
  };

  const fetchData = (req, res) => {
    axios
      .get("http://localhost:5059/api/users/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [message]);
  return (
    <div className="form">
      <div className="container">
        <Header />
        <form className="form" onSubmit={HandelSubmit}>
          <input
            type="email"
            name=""
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
          <p className="para">
            Don`t have an account{" "}
            <Link className="link" to="/signup">
              Sigup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
