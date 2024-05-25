import React, { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn) {
        console.log('you are not loggedin')
        navigate('/' , {replace: true});
        /**
         * Specifying replace: true will cause the navigation to replace the current entry in the history stack instead of adding a new one.
         * And this is going to prevent our user to pressing back in the browser 

         */ 
    }
  }, [navigate, isLoggedIn]);

  return children;
};

export default ProtectedRoutes;
