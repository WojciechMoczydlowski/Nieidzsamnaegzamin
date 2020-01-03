import eye from "$assets/eye.svg";
import { ErrorLabel, EyeIcon, InputWrapper, PasswordType, StyledInput, Text } from "$components/SignInForm";
import { SplashScreen } from "$components/SplashScreen";
import loginManager from "$services/loginManager";
import { Button } from "@material-ui/core";
import  styled  from "styled-components";
import React, { useState } from "react";
const SignUpForm: React.FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [secondPassword, setSecondPassword] = useState<string>("");

    const [dirtyLoader, setDirtyLoader] = useState(false);
    const [firstPasswordType, setFirstPasswordType] = useState<PasswordType>("password");
    const [secondPasswordType, setSecondPasswordType] = useState<PasswordType>("password");

    const [nameError, setNameError] = useState<string | undefined>(undefined);
    const [lastNameError, setLastNameError] = useState<string | undefined>(undefined);
    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);
    const [serverError, setServerError] = useState<string | undefined>(undefined);

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

    const handlePasswordError = () => {
        if (password === "") {
            let error = "Hasło jest wymagane";
            setPasswordError(error);
            return error;
        }
        if (password !== secondPassword) {
            let error = "Hasła się różnią";
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
        setServerError(undefined);
        handleNameError();
        handleLastNameError();
        handleEmailError();
        handlePasswordError();
        if (handleNameError() || handleLastNameError() || handleEmailError() || handlePasswordError()) {
        } else {
            loginManager.trySignUpWithEmailAndPassword(email, password, name, lastName, setDirtyLoader, setServerError);
        }
    };

    const handleShowPassword = (formNumber: string) => {
        if (formNumber === "first") {
            if (firstPasswordType === "password") setFirstPasswordType("text");
            else setFirstPasswordType("password");
        }
        if (formNumber === "second") {
            if (secondPasswordType === "password") setSecondPasswordType("text");
            else setSecondPasswordType("password");
        }
    };
    return (
        <>
            {dirtyLoader && <SplashScreen />}
            <InputWrapper>
                <StyledInput value={name} onChange={e => setName(e.target.value)} placeholder={"Wprowadź imię"} />
                {nameError && <ErrorLabel>{nameError}</ErrorLabel>}
            </InputWrapper>
            <InputWrapper>
                <StyledInput value={lastName} onChange={e => setLastName(e.target.value)} placeholder={"Nazwisko"} />
                {lastNameError && <ErrorLabel>{lastNameError}</ErrorLabel>}
            </InputWrapper>
            <InputWrapper>
                <StyledInput value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"} />
                {emailError && <ErrorLabel>{emailError}</ErrorLabel>}
            </InputWrapper>
            <InputWrapper>
                <StyledInput
                    type={firstPasswordType}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={"Hasło"}
                />
                <EyeIcon src={eye} alt="eye" onClick={() => handleShowPassword("first")} />
            </InputWrapper>
            <InputWrapper>
                <StyledInput
                    type={secondPasswordType}
                    value={secondPassword}
                    onChange={e => setSecondPassword(e.target.value)}
                    placeholder={"Hasło"}
                />
                <EyeIcon src={eye} alt="eye" onClick={() => handleShowPassword("second")} />
                {passwordError && <ErrorLabel>{passwordError}</ErrorLabel>}
            </InputWrapper>
            {serverError && <ErrorLabel>{serverError}</ErrorLabel>}
            <RegisterButton onClick={() => handleSignUp()}>
                <Text>ZAREJESTRUJ</Text>
            </RegisterButton>
        </>
    );
};

export const RegisterButton = styled.button`
    width: 100%;
    height: 56px;
    margin: 20px 0;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #2699FB;
    &:hover{
        background-color: #2699FB,
    };
`



export default SignUpForm;
