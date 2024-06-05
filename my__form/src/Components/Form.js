import React from "react";
import "./Header.css";

function Form() {
  return (
    <div className="form">
      <div className="container">
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
