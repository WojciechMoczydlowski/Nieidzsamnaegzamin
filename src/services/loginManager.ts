import firebase from "$configuration/firebase.ts";

export type ServerLoginError =
    | "Niepoprawny adres email"
    | "Konto użytkownika jest niedostępne"
    | "Nie istnieje konto dla tego emaila"
    | "Nieprawidłowe hasło";

class LoginManager {
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
        setServerError : (serverError:ServerLoginError) => void
    ) => {
        setDirtyLoader(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => setDirtyLoader(false))
            .catch(error => {
                setDirtyLoader(false);
                
            });
    };

    public trySignUpWithEmailAndPassword = (
        email: string,
        password: string,
        name: string,
        lastName: string,
        setDirtyLoader: (loader: boolean) => void,
    ) => {
        setDirtyLoader(true);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                setDirtyLoader(false);
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
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                setDirtyLoader(false);
                console.error(errorCode, errorMessage);
            });
    };

    private handleLoginError = (errorCode:string):ServerLoginError | undefined =>{
        switch(errorCode){
            case "auth/invalid-email": return "Niepoprawny adres email";
            case "auth/user-disabled": return "Konto użytkownika jest niedostępne"
            case "auth/user-not-found": return "Nie istnieje konto dla tego emaila";
            case "auth/wrong-password": return "Nieprawidłowe hasło"
            default :return undefined
        }
    }

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
