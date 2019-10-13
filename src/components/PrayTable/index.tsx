import loginManager from "$services/loginManager";
import React from "react";
const PrayTable: React.FunctionComponent = props => {
    return <div onClick={() => loginManager.signOut()}>Wyloguj</div>;
};

export default PrayTable;
