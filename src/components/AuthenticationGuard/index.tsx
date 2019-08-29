import firebase from "$configuration/firebase";
import LandingPage from "$pages/LandingPage";
import React, { useState } from "react";
const AuthenticationGuard: React.FunctionComponent = props => {
    const [currentUser, setcurrentUser] = useState<firebase.User | null>(null);
    firebase.auth().onAuthStateChanged(user => setcurrentUser(user));

    if (!currentUser) return <LandingPage />;
    return <>{props.children}</>;
};

export default AuthenticationGuard;
