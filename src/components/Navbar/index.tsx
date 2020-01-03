import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";
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
                     <AddExamDialog isOpen ={isOpenAddExamDialog} close = {() => setIsOpenAddExamDialog(false)}/>
                    <MyProfile>Profil</MyProfile>
                </RightSide>
            </NavbarWrapper>
        </AppBar>
    );
};

const NavbarWrapper = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Logo = styled(Typography)`
    display: flex;
    text-align: left;
    color: white;
`

const LeftSide = styled.div`
    width: 30%;
`

const RightSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
  


const AddExam = styled(Button)`
    text-align: center;
    color: white;
    margin-right: 2rem;
    cursor: pointer;
`

const MyProfile = styled(Button)`
    margin-right: 2rem;
    text-align: center;
    color: white;
    cursor: pointer;
`

export default Navbar;
