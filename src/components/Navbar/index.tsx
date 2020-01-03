import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
import AddExamDialog from "$components/AddExamDialog";
const Navbar: React.FunctionComponent = props => {

    const [isOpenAddExamDialog, setIsOpenAddExamDialog] = useState(false);
    return (
        <AppBar position="static" color="primary">
            <NavbarWrapper>
                <LeftSide>
                    <Logo variant="h5">Nie idź sam na egzamin</Logo>
                </LeftSide>
                <RightSide>
                    <AddExam onClick = {() => setIsOpenAddExamDialog(true)}>Dodaj egzamin</AddExam>
                    {
                        isOpenAddExamDialog && <AddExamDialog isOpen ={isOpenAddExamDialog} close = {() => setIsOpenAddExamDialog(false)}/>
                    }
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
