import firebase from "$configuration/firebase.ts";

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
        firebase
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
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                setDirtyLoader(false);
                setServerError(undefined);
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
            .catch(error => {
                if (error) {
                    const errorMessage = this.handleRegistrationError(error.code);
                    setServerError(errorMessage);
                    setDirtyLoader(false);
                }
            });
    };

  

    public signOut = () => {
        firebase
            .auth()
            .signOut()
            .catch(function(error) {
                console.log(error);
            });
    };
}

export default new LoginManager();
