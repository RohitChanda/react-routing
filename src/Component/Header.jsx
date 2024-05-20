import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>Learn React Routing</div>
      <div>Header Component</div>
      <Link to={"/"}>Home</Link>
       <br />
      <Link to={"about"}>About</Link>
      <br />
      <Link to={"contact"}>Contact</Link>
      <br />
      <Link to={"users-list"}>User List</Link>
    </>
  );
};

export default Header;
