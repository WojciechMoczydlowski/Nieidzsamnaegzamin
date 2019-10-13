import Navbar from "$components/Navbar";
import React from "react";
const MainLayout: React.FunctionComponent = props => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
};

export default MainLayout;
