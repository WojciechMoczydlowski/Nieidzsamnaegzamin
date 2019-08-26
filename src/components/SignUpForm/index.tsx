import firebase from "$configuration/firebase";
import { SingingSection } from "$pages/Login";
import { Button, DialogActions, DialogContentText, TextField } from "@material-ui/core";
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
        if (handleNameError() || handleLastNameError() || handleEmailError() || handlePasswordError()) {
            console.error("validation problem");
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(result => {
                    const user = result.user;
                    user &&
                        user
                            .updateProfile({
                                displayName: `${name} ${lastName}`,
                                photoURL: "https://example.com/jane-q-user/profile.jpg",
                            })
                            .then(
                                () => console.log("success"),
                                // Update successful.
                            )
                            .catch(error => console.error(error));
                })
                .then(() => setSingingSection("signing_in"))
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.error(errorCode, errorMessage);
                });
        }
    };
    return (
        <>
            <StyledDialogContentText>Uzupełnij swoje dane</StyledDialogContentText>
            <InputWrapper>
                <TextField
                    autoFocus
                    id="name"
                    placeholder={"Imię"}
                    type="email"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
                    error={nameError !== undefined}
                    helperText={nameError}
                />
                <TextField
                    margin="dense"
                    id="lastName"
                    placeholder={"Nazwisko"}
                    type="email"
                    fullWidth
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    error={lastNameError !== undefined}
                    helperText={lastNameError}
                />
                <TextField
                    margin="dense"
                    id="email"
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
