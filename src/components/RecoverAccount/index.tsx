import leftArrow from "$assets/leftArrow.svg";
import { DefaultButton, ErrorLabel, InputWrapper, StyledInput, Text } from "$components/Form";
import { Information } from "$components/SignInForm";
import { SplashScreen } from "$components/SplashScreen";
import { LoginSection } from "$pages/LandingPage";
import loginManager from "$services/loginManager";
import React, { useState } from "react";
import styled from "styled-components";
type RecoverAccountProps = {
    setLoginSection: (loginSection: LoginSection) => void;
};

const RecoverAccount: React.FunctionComponent<RecoverAccountProps> = ({ setLoginSection }) => {
    const [email, setEmail] = useState<string>("");

    const [information, setInformation] = useState<string | undefined>(undefined);
    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const [dirtyLoader, setDirtyLoader] = useState(false);
    const [serverError, setServerError] = useState<string | undefined>(undefined);

    const validateEmail = email => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailError = () => {
        if (email === "") {
            let error = "Niepoprawny format email";
            setEmailError(error);
            return error;
        }
        if (!validateEmail(email)) {
            let error = "";
            setEmailError(error);
            return error;
        }

        setEmailError(undefined);
        return undefined;
    };

    const handleResetPassword = () => {
        if (!handleEmailError()) {
            loginManager.resetPassword(email, setDirtyLoader, setServerError, setInformation);
        }
    };

    return (
        <>
            {dirtyLoader && <SplashScreen />}
            <InputWrapper>
                <StyledInput value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"} />
            </InputWrapper>
            {emailError && <ErrorLabel>{emailError}</ErrorLabel>}
            {serverError && <ErrorLabel>{serverError}</ErrorLabel>}
            {information && <SuccessInformation>{information}</SuccessInformation>}
            <DefaultButton onClick={handleResetPassword}>
                <Text>ODZYSKAJ DOSTĘP</Text>
            </DefaultButton>
            <BackToLogin onClick={() => setLoginSection("signing_in")}>
                <LeftArrow src={leftArrow} alt="leftArrow" />
                <div>Powrót do logowania</div>
            </BackToLogin>
        </>
    );
};

export const RegisterButton = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 56px;
    margin: 20px 0;

    border-radius: 4px;
    background-color: #2699fb;

    &:hover {
        background-color: #2699fb;
    }
`;

const LeftArrow = styled.img`
    width: 8px;
    height: 12px;
    margin: 0 10px;
`;

export const BackToLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 20px 0;

    color: #000000;
    opacity: 0.6;

    font: 400 12px/14px Roboto;
    letter-spacing: 0.4px;

    cursor: pointer;
`;

export const SuccessInformation = styled(Information)`
    text-align: left;
    font: 400 12px/14px Roboto;
    letter-spacing: 0.4px;
    margin-top: 4px;
    margin-left: 16px;
`;

export default RecoverAccount;
