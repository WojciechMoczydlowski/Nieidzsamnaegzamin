import eye from "$assets/eye.svg";
import facebook from "$assets/facebook.svg";
import google from "$assets/google.svg";
import { SplashScreen } from "$components/SplashScreen";
import { LoginSection } from "$pages/LandingPage";
import loginManager from "$services/loginManager";
import { Button, CardActionArea } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
export type PasswordType = "text" | "password";

type SignInFormProps = {
    setLoginSection: (loginSection: LoginSection) => void;
};

const SignInForm: React.FunctionComponent<SignInFormProps> = ({ setLoginSection }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [passwordType, setPasswordType] = useState<PasswordType>("password");
    const [dirtyLoader, setDirtyLoader] = useState(false);
    const [serverError, setServerError] = useState<string | undefined>(undefined);

    const handleSignIn = () => {
        console.error("signIn");
        loginManager.trySignInWithEmailAndPassword(email, password, setDirtyLoader, setServerError);
    };

    const handleShowPassword = () => {
        if (passwordType === "password") setPasswordType("text");
        else setPasswordType("password");
    };

    return (
        <>
            {dirtyLoader && <SplashScreen />}
            <FacebookLogin>
                <SocialMediaIcon src={facebook} alt="facebook" />
                <Text>ZALOGUJ PRZEZ FACEBOOK</Text>
            </FacebookLogin>
            <GoogleLogin>
                <SocialMediaIcon src={google} alt="google" />
                <Text>ZALOGUJ PRZEZ GOOGLE</Text>
            </GoogleLogin>
            <Information>lub zaloguj przez email:</Information>
            <InputWrapper>
                <StyledInput value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"} />
            </InputWrapper>
            <InputWrapper>
                <StyledInput
                    type={passwordType}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={"Hasło"}
                />
                <EyeIcon src={eye} alt="eye" onClick={handleShowPassword} />
            </InputWrapper>
            {serverError && <ErrorLabel>{serverError}</ErrorLabel>}
            <LoginButton onClick={() => handleSignIn()}>
                <Text>ZALOGUJ</Text>
            </LoginButton>
            <ActionInformation onClick={() => setLoginSection("recover_account")}>
                Nie pamiętasz hasła?
            </ActionInformation>
        </>
    );
};

const FacebookLogin = styled(CardActionArea)({
    width: "100%",
    height: "56px",
    margin: "20px 0",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent linear-gradient(90deg, #3C5A99 0%, #8088FF 100%) 0% 0% no-repeat padding-box",
    borderRadius: "4px",
});

const GoogleLogin = styled(CardActionArea)({
    width: "100%",
    height: "56px",
    margin: "20px 0",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent linear-gradient(90deg, #DB4437 0%, #8088FF 100%) 0% 0% no-repeat padding-box",
    borderRadius: "4px",
});

export const Information = styled("div")({
    textAlign: "center",
    font: "400 12px/14px Roboto",
    letterSpacing: "0.4px",
    color: "#000000",
    opacity: 0.6,
});

export const ActionInformation = styled("div")({
    textAlign: "center",
    font: "400 12px/14px Roboto",
    letterSpacing: "0.4px",
    color: "#000000",
    opacity: 0.6,
    cursor: "pointer",
    margin: "20px 0",
});

const SocialMediaIcon = styled("img")({
    marginRight: "16px",
});

export const LoginButton = styled(Button)({
    width: "100%",
    height: "56px",
    margin: "20px 0",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    background: "transparent linear-gradient(90deg, #007BFA 0%, #8088FF 100%) 0% 0% no-repeat padding-box",
});

export const Text = styled("div")({
    letterSpacing: 0,
    color: "#FFFFFF",
    font: "500 14px/17px Roboto",
});

export const InputWrapper = styled("div")({
    position: "relative",
    marginTop: "20px",
});

export const StyledInput = styled("input")({
    border: "1px solid #000000",
    padding: "16px 18px",
    width: "100%",
    opacity: 0.6,
    color: "#000000",
    outline: "none",
    borderRadius: "4px",
    fontSize: "16px ",
    "&:focus": {
        border: "2px solid #2699FB",
    },
});

export const EyeIcon = styled("img")({
    position: "absolute",
    top: "50%",
    right: "12px",
    transform: "translate(0,-50%)",
    cursor: "pointer",
});

export const ErrorLabel = styled("div")({
    textAlign: "left",
    font: "400 12px/14px Roboto",
    letterSpacing: "0.4px",
    color: "#DB4437",
    marginTop: "4px",
    marginLeft: "16px",
});

export default SignInForm;
