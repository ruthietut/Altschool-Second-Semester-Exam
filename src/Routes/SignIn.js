import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../components/firebase";
import { useNavigate, Link } from "react-router-dom";

import "../components/styles.css";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

function SignIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  // User Login info
  const database = [
    {
      username: "user1",
      password: "password1",
    },
    {
      username: "user2",
      password: "password2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const handleGoogleSignIn = (event) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        navigate("/");
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
    <>
      <Helmet>
        <title>Signin</title>
        <meta name="description" content="sign in to access other features" />
        <link rel="canonical" href="/SignIn" />
      </Helmet>
      <div className="App">
        
          <Nav />
        

        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            <button onClick={handleGoogleSignIn}>sign in with google</button>

            {isSubmitted ? <div>{navigate("/")}</div> : renderForm}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SignIn;
