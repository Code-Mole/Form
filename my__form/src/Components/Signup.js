import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header.js";
import "./Header.css";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    userName,
    email,
    password,
  };

  const usenavigate = useNavigate();

  const Alert = () => {
    console.log(message);
  };

  const resgister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5059/api/users", data)
      .then((res) => {
        setMessage(res.data.message);
        console.log(res.data);
        // navigate to login page
        usenavigate("/");
        console.log("signed up successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchData = async () => {
    await axios
      .get("http://localhost:5059/api/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="form">
      <div className="container">
        <Header />
        <form className="form" onSubmit={resgister}>
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

export default Signup;
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
