import { ErrorLabel, StyledInput, Title } from "$components/SignInForm";
import { SingingSection } from "$pages/LandingPage";
import loginManager from "$services/loginManager";
import { Button, DialogActions, DialogContentText } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
type SignUpFormProps = {
    setSingingSection: (signInSection: SingingSection) => void;
};

const SignUpForm: React.FunctionComponent<SignUpFormProps> = ({ setSingingSection }) => {
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [nameError, setNameError] = useState<string | undefined>(undefined);
    const [lastNameError, setLastNameError] = useState<string | undefined>(undefined);
    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);

    const handleNameError = () => {
        if (name === "") {
            let error = "Imię jest wymagane";
            setNameError(error);
            return error;
        } else {
            setNameError(undefined);
            return undefined;
        }
    };

    const handleLastNameError = () => {
        if (lastName === "") {
            let error = "Nazwisko jest wymagane";
            setLastNameError(error);
            return error;
        }
        setLastNameError(undefined);
        return undefined;
    };

    const handleEmailError = () => {
        if (email === "") {
            let error = "Email jest wymagany";
            setEmailError(error);
            return error;
        }
        if (!validateEmail(email)) {
            let error = "Email jest wymagany";
            setEmailError(error);
            return error;
        }

        setEmailError(undefined);
        return undefined;
    };

    const handlePasswordError = () => {
        if (password === "") {
            let error = "Hasło jest wymagane";
            setPasswordError(error);
            return error;
        }
        setPasswordError(undefined);
        return undefined;
    };
    const validateEmail = email => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSignUp = () => {
        handleNameError();
        handleLastNameError();
        handleEmailError();
        handlePasswordError();
        if (handleNameError() || handleLastNameError() || handleEmailError() || handlePasswordError()) {
            console.error("validation problem");
        } else {
            // loginManager.trySignUp(email, password, name, lastName);
            loginManager.trySignUp(email, password, name, lastName);
            console.error("signUp");
        }
    };
    return (
        <>
            <Title>Uzupełnij swoje dane</Title>
            <InputWrapper>
                <StyledInput value={name} onChange={e => setName(e.target.value)} placeholder={"Imię"} />
                {nameError && <ErrorLabel>{nameError}</ErrorLabel>}
                <StyledInput value={lastName} onChange={e => setLastName(e.target.value)} placeholder={"Nazwisko"} />
                {lastNameError && <ErrorLabel>{lastNameError}</ErrorLabel>}
                <StyledInput value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"} />
                {emailError && <ErrorLabel>{emailError}</ErrorLabel>}
                <StyledInput
                    type={"password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={"Hasło"}
                />
                {passwordError && <ErrorLabel>{passwordError}</ErrorLabel>}
            </InputWrapper>
            <StyledDialogActions>
                <Button color="primary" onClick={() => setSingingSection("signing_in")}>
                    Wstecz
                </Button>
                <Button color="primary" onClick={handleSignUp}>
                    Załóż konto
                </Button>
            </StyledDialogActions>
        </>
    );
};
const StyledDialogContentText = styled(DialogContentText)({
    textAlign: "center",
});

const StyledDialogActions = styled(DialogActions)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
});

const InputWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
});

export default SignUpForm;
