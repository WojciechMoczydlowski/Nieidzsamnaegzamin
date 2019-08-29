import firebase from "$configuration/firebase";
import { BackgroundPicture, Tile, TitleWrapper } from "$pages/LandingPage";
import styled from "@material-ui/styles/styled";
import React, { useEffect, useState } from "react";
const Home: React.FunctionComponent = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        currentUser && setUser(currentUser);
    }, []);
    return (
        <BackgroundPicture>
            <TitleWrapper>
                <Tile> Nie idź sam na egzamin</Tile>
                <Logout onClick={() => firebase.auth().signOut()}>Wyloguj</Logout>
            </TitleWrapper>
        </BackgroundPicture>
    );
};
const Logout = styled("h3")({
    cursor: "pointer",
    color: "white",
});

export default Home;
