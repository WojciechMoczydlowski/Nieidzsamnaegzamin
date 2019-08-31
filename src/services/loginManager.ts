import firebase from "$configuration/firebase.ts";
class LoginManager {
    private actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: "https://nieidzsamnaegzamin-3d87b.web.app",
        // This must be true.
        handleCodeInApp: true,
        iOS: {
            bundleId: "com.example.ios",
        },
        android: {
            packageName: "com.example.android",
            installApp: true,
            minimumVersion: "12",
        },
        dynamicLinkDomain: "https://nieidzsamnaegzamin-3d87b.web.app",
    };

    public trySignInWithEmailAndPassword = (
        email: string,
        password: string,
        setDirtyLoader: (loader: boolean) => void,
    ) => {
        setDirtyLoader(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => setDirtyLoader(false))
            .catch(error => {
                setDirtyLoader(false);
                return error;
            });
    };

    public trySignUp = (email: string, password: string, name: string, lastName: string) => {
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
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });
    };

    public trySignInWtihEmailLink = email => {
        firebase
            .auth()
            .sendSignInLinkToEmail(email, this.actionCodeSettings)
            .then(function() {
                console.log("success");
                window.localStorage.setItem("emailForSignIn", email);
            })
            .catch(function(error) {
                console.error(error);
            });
    };

    public sendPasswordResetEmail = email => {
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(email)
            .then(function() {
                // Email sent.
            })
            .catch(function(error) {
                // An error happened.
            });
    };
}

export default new LoginManager();
