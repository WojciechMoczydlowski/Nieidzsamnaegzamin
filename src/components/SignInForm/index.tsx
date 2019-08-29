import firebase from "$configuration/firebase";
import { SingingSection } from "$pages/LandingPage";
import { Button, DialogActions } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";

type SignInFormProps = {
    setSingingSection: (signInSection: SingingSection) => void;
};

const SignInForm: React.FunctionComponent<SignInFormProps> = ({ setSingingSection }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);

    const handleEmailError = () => {
        if (email === "") {
            let error = "Email jest wymagany";
            setEmailError(error);
            return error;
        }
        if (!validateEmail(email)) {
            let error = "Niepoprawny format email";
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

    const handleSignIn = () => {
        if (handleEmailError() || handlePasswordError()) {
            console.error("validation problem");
        } else {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.error(errorCode, errorMessage);
                });
        }
    };
    return (
        <>
            <Title>Aby się zalogować, uzupełnij swoje dane</Title>
            <InputWrapper>
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
                <Button color="primary" onClick={handleSignIn}>
                    Zaloguj
                </Button>
                <Button color="primary" onClick={() => setSingingSection("signing_up")}>
                    Zarejestruj
                </Button>
            </StyledDialogActions>
        </>
    );
};
export const Title = styled("h3")({
    color: "white",
    textAlign: "center",
    "@media (max-width: 600px)": {
        fontSize: "16px",
    },
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

export const StyledInput = styled("input")({
    marginTop: "10px",
    padding: "15px",
    color: "white",
    border: "1px solid white",
    outline: "none",
    borderRadius: "20px",
    background: "transparent",
    fontWeight: "bold",
    "&::placeholder": {
        color: "white",
        fontWeight: "normal",
    },
});

export const ErrorLabel = styled("div")({
    color: "white",
    margin: "5px 10px",
});

export default SignInForm;
