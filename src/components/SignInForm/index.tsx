import firebase from "$configuration/firebase";
import { SingingSection } from "$pages/Login";
import { Button, DialogActions, DialogContentText, TextField } from "@material-ui/core";
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
            <StyledDialogContentText>Aby się zalogować, uzupełnij swoje dane</StyledDialogContentText>
            <InputWrapper>
                <TextField
                    autoFocus
                    margin="dense"
                    placeholder={"Email"}
                    type="email"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={emailError !== undefined}
                    helperText={emailError}
                />
                <TextField
                    margin="dense"
                    placeholder={"Hasło"}
                    type="password"
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    error={passwordError !== undefined}
                    helperText={passwordError}
                />
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

export default SignInForm;
