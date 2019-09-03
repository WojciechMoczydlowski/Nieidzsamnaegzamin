import firebase from "$configuration/firebase";
import loginManager from "$services/loginManager";
import styled from "@material-ui/styles/styled";
import React, { useEffect, useState } from "react";
const MainPage: React.FunctionComponent = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        currentUser && setUser(currentUser);
    }, []);
    return <Logout onClick={() => loginManager.signOut()}> Wyloguj</Logout>;
};
const Logout = styled("h3")({
    cursor: "pointer",
});

export default MainPage;
