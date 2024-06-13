import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header.js";
import "./Header.css";

function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    userName,
    email,
    password,
  };

  const Alert = () => {
    alert(message);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Perform form submission logic here
  //   console.log(data);
  // try {
  //   await axios.post("http://localhost:5059/api/users", data).then((res) => {
  //     setMessage(res.data);
  //     console.log(res.data);
  //   });
  //   console.log("Data sent to server");
  // } catch (err) {
  //   console.log(err);
  // }
  // };
  const resgister = async () => {
    try {
      await axios.post("http://localhost:5059/api/users", data).then((res) => {
        setMessage(res.data);
        console.log(res.data);
      });
      console.log("Data sent to server");
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5059/api/users");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [message]);

  return (
    <div className="form">
      <div className="container">
        <Header />
        <form className="form">
          <input
            type="text"
            name=""
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn"
            onClick={() => {
              resgister();
              Alert();
            }}
          >
            Submit
          </button>
          <p className="para">
            Have an account{" "}
            <Link className="link" to="/login">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Form;
