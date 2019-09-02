import leftArrow from "$assets/leftArrow.svg";
import { InputWrapper, LoginButton, StyledInput, Text } from "$components/SignInForm";
import { LoginSection } from "$pages/LandingPage";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
type RecoverAccountProps = {
    setLoginSection: (loginSection: LoginSection) => void;
};

const RecoverAccount: React.FunctionComponent<RecoverAccountProps> = ({ setLoginSection }) => {
    const [email, setEmail] = useState<string>("");

    const [emailError, setEmailError] = useState<string | undefined>(undefined);

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

    return (
        <>
            <InputWrapper>
                <StyledInput value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"} />
            </InputWrapper>

            <LoginButton>
                <Text>ODZYSKAJ DOSTĘP</Text>
            </LoginButton>
            <BackToLogin onClick={() => setLoginSection("signing_in")}>
                <LeftArrow src={leftArrow} alt="leftArrow" />
                <div>Powrót do logowania</div>
            </BackToLogin>
        </>
    );
};

export const RegisterButton = styled(Button)({
    width: "100%",
    height: "56px",
    margin: "20px 0",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    backgroundColor: "#2699FB",
    "&:hover": {
        backgroundColor: "#2699FB",
    },
});

const LeftArrow = styled("img")({
    width: "7px",
    height: "12px",
    margin: " 0 10px",
});

export const BackToLogin = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    font: "400 12px/14px Roboto",
    letterSpacing: "0.4px",
    color: "#000000",
    opacity: 0.6,
    cursor: "pointer",
    margin: "20px 0",
});

export default RecoverAccount;
