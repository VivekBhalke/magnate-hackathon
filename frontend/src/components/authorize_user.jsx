import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../context/userContext";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lotties/Animat';

const AuthorizeUser = ({ children }) => {
    const { isSignedIn, isLoaded, user } = useUser();

    console.log(`Loaded? ${isLoaded}, Signed in? ${isSignedIn}`);

    if (!isLoaded) {
        return ; 
    }

    if (!isSignedIn) {
        return <Navigate to="/sign-in" replace />;
    }

    const data = useContext(UserDataContext)
    data.setEmail(user.primaryEmailAddress.emailAddress)
    
    return children;
};

export default AuthorizeUser;
