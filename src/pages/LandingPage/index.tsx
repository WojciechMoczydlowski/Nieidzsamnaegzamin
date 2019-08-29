import mainBackground from "$assets/mainBackground.jpg";
import SignInForm from "$components/SignInForm";
import SignUpForm from "$components/SignUpForm";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
export type SingingSection = "signing_in" | "signing_up";

const Login: React.FunctionComponent = () => {
    const [singingSection, setSingingSection] = useState<SingingSection>("signing_in");

    return (
        <BackgroundPicture>
            <TitleWrapper>
                <Tile> Nie idź sam na egzamin</Tile>
                <SubTile>Dodawaj ezgaminy</SubTile>
                <SubTile>Módl się za innych</SubTile>
            </TitleWrapper>
            <AuthenticationForm>
                {(singingSection === "signing_in" && <SignInForm setSingingSection={setSingingSection} />) ||
                    (singingSection === "signing_up" && <SignUpForm setSingingSection={setSingingSection} />)}
            </AuthenticationForm>
        </BackgroundPicture>
    );
};

export const BackgroundPicture = styled("div")({
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${mainBackground})`,
    position: "relative",
});

export const TitleWrapper = styled("div")({
    color: "white",
    position: "absolute",
    top: "5%",
    left: "5%",
    textAlign: "center",
});

export const Tile = styled("h1")({
    color: "white",
    textAlign: "left",
    fontSize: "64px",
    marginTop: "0",
});

export const SubTile = styled("h3")({
    color: "white",
    textAlign: "left",
});

const AuthenticationForm = styled("div")({
    position: "absolute",
    top: "50%",
    right: "20%",
    transform: "translate(0, -50%)",
    width: "400px",
});
export default Login;
