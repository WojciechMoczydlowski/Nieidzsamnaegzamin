import firebase from "$configuration/firebase";
import LandingPage from "$pages/LandingPage";
import React, { createContext, useState } from "react";

export const UserContext = createContext<User>({ displayName: "", uid: "" });
const AuthenticationGuard: React.FunctionComponent = props => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
    firebase.auth().onAuthStateChanged(user => setCurrentUser(user));

    if (!currentUser) return <LandingPage />;
    return <UserContext.Provider value={currentUser}>{props.children}</UserContext.Provider>;
};

export default AuthenticationGuard;
