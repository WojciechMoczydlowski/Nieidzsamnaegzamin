import firebase from "$configuration/firebase";
import styled from "@material-ui/styles/styled";
import React, { useEffect, useState } from "react";
const Home: React.FunctionComponent = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        currentUser && setUser(currentUser);
    }, []);
    return <div></div>;
};
const Logout = styled("h3")({
    cursor: "pointer",
    color: "white",
});

export default Home;
