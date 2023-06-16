import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import "../styles/LoginForm.css";
import axios from "axios";


const LoginForm = () => {

    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    axios.post("http://localhost:5000/users/authenticate", 
      {username:uname.value,password:pass.value }
    )
    .then(function (response) {

      localStorage.setItem("token",response.data.token);
      console.log(response);
      navigate("/products");

    })
    .catch(function (error) {
      setErrorMessages({ name: "uname", message: errors.uname });
      setErrorMessages({ name: "pass", message: errors.pass });
      console.log(error);
    });
    // var http = axios.create({
    //   baseURL: "http://localhost:5000/users/authenticate",
    //   headers: {
    //     "Content-type": "application/json"
    //   }
    // });
    // const{data:jwt}= http.post({username:uname,password:pass});
    // localStorage.setItem("token",jwt);
    // http.post({username:uname,password:pass}).then(response =>{
      
    //   localStorage.setItem("token",response.data.token);

    // }).catch(e=>{
    //   setErrorMessages({ name: "uname", message: errors.uname });
    //   setErrorMessages({ name: "pass", message: errors.pass });
    //   console.log(e);
    // });
    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};
export default LoginForm;