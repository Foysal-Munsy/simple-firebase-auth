import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.initi";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("google sign in clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign out");
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Login</h2>
      {/* <button onClick={handleGoogleSignIn}>Sign in with google</button>
      <button onClick={handleGoogleSignOut}>Sign Out</button> */}
      {user ? (
        <button onClick={handleGoogleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in with google</button>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
