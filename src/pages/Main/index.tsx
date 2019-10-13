import MainLayout from "$components/MainLayout";
import PrayTable from "$components/PrayTable";
import firebase from "$configuration/firebase";
import styled from "@material-ui/styles/styled";
import React, { useEffect, useState } from "react";

const MainPage: React.FunctionComponent = props => {
    const [user, setUser] = useState<firebase.User | null>(null);
    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        currentUser && setUser(currentUser);
    }, []);
    return (
        <MainPageWrapper>
            <MainLayout>
                <PrayTable />
            </MainLayout>
        </MainPageWrapper>
    );
};

const MainPageWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
});

export default MainPage;
