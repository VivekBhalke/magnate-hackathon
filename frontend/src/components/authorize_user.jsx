import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const AuthorizeUser = ({ children }) => {
    const { isSignedIn, isLoaded } = useUser();

    console.log(`Loaded? ${isLoaded}, Signed in? ${isSignedIn}`);

    if (!isLoaded) {
        return <div>Loading...</div>; 
    }

    if (!isSignedIn) {
        return <Navigate to="/sign-in" replace />;
    }

    return children;
};

export default AuthorizeUser;
