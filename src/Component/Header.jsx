import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Header = () => {

  const {doLogin, doLogout, isLoggedIn} = useAuth();
  useEffect(() => {
    console.log('isLoggedIn changed', isLoggedIn)
  }, [isLoggedIn])
  return (
    <>
      <div>Learn React Routing</div>
      <div>Header Component</div>
      <div style={{display:'flex'}}>
        <button onClick={() => {
          doLogin();
        }}>Login</button>
        <button onClick={() => {
          doLogout();
        }}>Logout</button>
      </div>
      <Link to={"/"}>Home</Link>
       <br />
      <Link to={"about"}>About</Link>
      <br />
      <Link to={"contact"}>Contact</Link>
      <br />
      <Link to={"users-list"}>User List</Link>
      <br />
      <Link to={"user/1234"}>User Details</Link>
    </>
  );
};

export default Header;
