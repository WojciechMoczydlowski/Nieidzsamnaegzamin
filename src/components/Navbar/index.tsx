import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React from "react";
const Navbar: React.FunctionComponent = props => {
    return (
        <AppBar position="static" color="primary">
            <NavbarWrapper>
                <LeftSide>
                    <Logo variant="h5">Nie idź sam na egzamin</Logo>
                </LeftSide>
                <RightSide>
                    <AddExam>Dodaj egzamin</AddExam>
                    <MyProfile>Profil</MyProfile>
                </RightSide>
            </NavbarWrapper>
        </AppBar>
    );
};

const NavbarWrapper = styled(Toolbar)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
});

const Logo = styled(Typography)({
    display: "flex",
    textAlign: "left",
    color: "white",
});

const LeftSide = styled("div")({
    width: "30%",
});

const RightSide = styled("div")({
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
});

const AddExam = styled(Button)({
    textAlign: "center",
    color: "white",
    marginRight: "2rem",
    cursor: "pointer",
});

const MyProfile = styled(Button)({
    marginRight: "2rem",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
});

export default Navbar;
