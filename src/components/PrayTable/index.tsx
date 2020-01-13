import loginManager from "$services/loginManager";
import React from "react";
const PrayTable: React.FunctionComponent = props => {
    // db.collection("cities")
    //     .doc("SF")
    //     .onSnapshot(function(doc) {
    //         console.log("Current data: ", doc.data());
    //     });
    return <div onClick={() => loginManager.signOut()}>Wyloguj</div>;
};

export default PrayTable;
