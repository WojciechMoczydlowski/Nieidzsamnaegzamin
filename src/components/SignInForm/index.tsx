import eye from "$assets/eye.svg";
import { DefaultButton, ErrorLabel, EyeIcon, InputWrapper, StyledInput, Text } from "$components/Form";
import { SplashScreen } from "$components/SplashScreen";
import { LoginSection } from "$pages/LandingPage";
import loginManager from "$services/loginManager";
import React, { useState } from "react";
import styled from "styled-components";
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
        loginManager.trySignInWithEmailAndPassword(email, password, setDirtyLoader, setServerError);
    };

    const handleLoginWithGoogle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        loginManager.loginWithGoogle(setServerError);
    };

    const handleLoginWithFacebook = () => {
        loginManager.loginWithFacebook(setServerError);
    };

    const handleShowPassword = () => {
        if (passwordType === "password") setPasswordType("text");
        else setPasswordType("password");
    };

    return (
        <>
            {dirtyLoader && <SplashScreen />}
            {/* <FacebookLogin onClick={handleLoginWithFacebook}>
                <SocialMediaIcon src={facebook} alt="facebook" />
                <Text>ZALOGUJ PRZEZ FACEBOOK</Text>
            </FacebookLogin>
            <GoogleLogin onClick={handleLoginWithGoogle}>
                <SocialMediaIcon src={google} alt="google" />
                <Text>ZALOGUJ PRZEZ GOOGLE</Text>
            </GoogleLogin> */}
            {/* <Information>lub zaloguj przez email:</Information> */}
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
            <DefaultButton onClick={() => handleSignIn()}>
                <Text>ZALOGUJ</Text>
            </DefaultButton>
            <ActionInformation onClick={() => setLoginSection("recover_account")}>
                Nie pamiętasz hasła?
            </ActionInformation>
        </>
    );
};

const FacebookLogin = styled.button`
    width: 100%;
    height: 56px;
    margin: 20px 0;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: transparent linear-gradient(90deg, #3c5a99 0%, #8088ff 100%) 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`;

const GoogleLogin = styled.button`
    width: 100%;
    height: 56px;
    margin: 20px 0;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: transparent linear-gradient(90deg, #db4437 0%, #8088ff 100%) 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`;

export const Information = styled.div`
    text-align: center;
    font: 400 12px/14px Roboto;
    letter-spacing: 0.4px;
    color: #000000;
    opacity: 0.6;
`;

export const ActionInformation = styled.div`
    text-align: center;
    font: 400 12px/14px Roboto;
    letter-spacing: 0.4px;
    color: #000000;
    opacity: 0.6;
    cursor: pointer;
    margin: 20px 0;
`;

const SocialMediaIcon = styled.img`
    margin-right: 16px;
`;

export default SignInForm;
