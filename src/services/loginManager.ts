import firebaseClient, { firestore } from "$configuration/firebase.ts";
import firebase from "firebase";
export type ServerLoginError =
    | "auth/invalid-email"
    | "auth/user-disabled"
    | "auth/user-not-found"
    | "auth/wrong-password";

export type ServerRegistrationError =
    | "auth/email-already-in-use"
    | "auth/invalid-email"
    | "auth/operation-not-allowed"
    | "auth/weak-password";

class LoginManager {
    private handleLoginError = (errorCode: ServerLoginError): string | undefined => {
        switch (errorCode) {
            case "auth/invalid-email":
                return "Niepoprawny format adresu email";
            case "auth/user-disabled":
                return "Konto użytkownika jest niedostępne";
            case "auth/user-not-found":
                return "Nie istnieje konto dla tego emaila";
            case "auth/wrong-password":
                return "Nieprawidłowe hasło";
            default:
                return "Bład serwera";
        }
    };
    private handleRegistrationError = (errorCode: ServerRegistrationError): string | undefined => {
        switch (errorCode) {
            case "auth/invalid-email":
                return "Niepoprawny format adresu email";
            case "auth/email-already-in-use":
                return "Email jest już używany";
            case "auth/weak-password":
                return "Zbyt słabe hasło";
            case "auth/operation-not-allowed":
                return "Nie można wykonać operacji";
            default:
                return "Błąd serwera";
        }
    };
    // private actionCodeSettings = {
    //     // URL you want to redirect back to. The domain (www.example.com) for this
    //     // URL must be whitelisted in the Firebase Console.
    //     url: "https://nieidzsamnaegzamin-3d87b.web.app",
    //     // This must be true.
    //     handleCodeInApp: true,
    //     iOS: {
    //         bundleId: "com.example.ios",
    //     },
    //     android: {
    //         packageName: "com.example.android",
    //         installApp: true,
    //         minimumVersion: "12",
    //     },
    //     dynamicLinkDomain: "https://nieidzsamnaegzamin-3d87b.web.app",
    // };

    public trySignInWithEmailAndPassword = (
        email: string,
        password: string,
        setDirtyLoader: (loader: boolean) => void,
        setServerError: (serverError: string | undefined) => void,
    ) => {
        setDirtyLoader(true);
        firebaseClient
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setServerError(undefined);
                setDirtyLoader(false);
            })
            .catch(error => {
                setDirtyLoader(false);
                if (error) {
                    const errorMessage = this.handleLoginError(error.code);
                    setServerError(errorMessage);
                }
            });
    };

    public trySignUpWithEmailAndPassword = (
        email: string,
        password: string,
        name: string,
        lastName: string,
        setDirtyLoader: (loader: boolean) => void,
        setServerError: (serverError: string | undefined) => void,
    ) => {
        setDirtyLoader(true);
        firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                result.user &&
                    firestore
                        .collection("da_studnia_warszawa")
                        .doc(result.user.uid)
                        .set({
                            exams: [],
                        });
                setDirtyLoader(false);
                setServerError(undefined);
                const user = result.user;
                user &&
                    user
                        .updateProfile({
                            displayName: `${name} ${lastName}`,
                        })
                        .then(
                            () => console.log("success"),
                            // Update successful.
                        )
                        .catch(error => console.error(error));
            })
            .catch(error => {
                if (error) {
                    const errorMessage = this.handleRegistrationError(error.code);
                    setServerError(errorMessage);
                    setDirtyLoader(false);
                }
            });
    };
    public loginWithGoogle = (setServerError: (serverError: string | undefined) => void) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("profile");
        firebase.auth().useDeviceLanguage();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function(result) {
                if (
                    result &&
                    result.additionalUserInfo &&
                    result.additionalUserInfo.profile &&
                    result.additionalUserInfo.profile
                ) {
                    result.user &&
                        firestore
                            .collection("winter_2019/2020")
                            .doc("da_studnia_warszawa")
                            .collection("users")
                            .doc(result.user.uid)
                            .set({
                                exams: [],
                            });
                    const { name = undefined } = { ...result.additionalUserInfo.profile };
                    const user = firebaseClient.auth().currentUser;
                    if (name) {
                        if (user && !user.displayName) {
                            user.updateProfile({
                                displayName: name,
                            })
                                .then(() => console.log("success"))
                                .catch(error => {});
                        }
                    }
                }
                setServerError(undefined);
            })
            .catch(function(error) {
                if (error.code === "auth/account-exists-with-different-credential") {
                    setServerError("Email w użyciu.Spróbuj zalogowac się innym dostawcą");
                }
            });
    };

    public loginWithFacebook = (setServerError: (serverError: string | undefined) => void) => {
        const provider = new firebase.auth.FacebookAuthProvider();
        // provider.addScope("name");
        firebase.auth().useDeviceLanguage();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function(result) {
                if (
                    result &&
                    result.additionalUserInfo &&
                    result.additionalUserInfo.profile &&
                    result.additionalUserInfo.profile
                ) {
                    result.user &&
                        firestore
                            .collection("da_studnia_warszawa")
                            .doc(result.user.uid)
                            .set({
                                exams: [],
                            });
                    const { name = undefined } = { ...result.additionalUserInfo.profile };
                    const user = firebaseClient.auth().currentUser;
                    if (name) {
                        if (user && !user.displayName) {
                            user.updateProfile({
                                displayName: name,
                            })
                                .then(() => console.log("success"))
                                .catch(error => {
                                    console.error(error);
                                });
                        }
                    }
                }
                setServerError(undefined);
            })
            .catch(function(error) {
                if (error.code === "auth/account-exists-with-different-credential") {
                    setServerError("Email w użyciu.Spróbuj zalogowac się innym dostawcą");
                }
            });
    };
    public resetPassword = (
        email,
        setDirtyLoader: (loader: boolean) => void,
        setServerError: (serverError: string | undefined) => void,
        setInformation: (information: string | undefined) => void,
    ) => {
        setDirtyLoader(true);
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(function() {
                setDirtyLoader(false);
                setServerError(undefined);
                setInformation("Wiadomość została poprawnie wysłana");
            })
            .catch(function(error) {
                const errorCode = error.code;
                if (errorCode === "auth/invalid-email") {
                    setServerError("Niepoprawny format email");
                }
                if (errorCode === "auth/user-not-found") {
                    setServerError("Nie istnieje konto przypisane do danego emaila");
                }
                setDirtyLoader(false);
            });
    };

    public signOut = () => {
        firebaseClient
            .auth()
            .signOut()
            .catch(function(error) {
                console.log(error);
            });
    };
}

export default new LoginManager();
