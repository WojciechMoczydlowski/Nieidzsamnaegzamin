import firebase from "$configuration/firebase";
import styled from "@material-ui/styles/styled";
import React, { useEffect } from "react";

const Home: React.FunctionComponent = () => {
    useEffect(() => {
        console.error("render");
        const currentUser = firebase.auth().currentUser;
        currentUser && console.log(currentUser);
    }, []);
    return (
        <div>
            <div>HomePage</div>
            <Logout onClick={() => firebase.auth().signOut()}>Wyloguj</Logout>
        </div>
    );
};
const Logout = styled("div")({
    cursor: "pointer",
});

export default Home;
