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

    public trySignInWtihEmail = email => {
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

    public verifyYourEmail = () => {
        const user = firebase.auth().currentUser;

        user &&
            user
                .sendEmailVerification()
                .then(function() {})
                .then(() => console.error(firebase.auth().currentUser))
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
