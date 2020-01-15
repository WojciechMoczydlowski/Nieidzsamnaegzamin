import loginManager from "$services/loginManager";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
const Navbar: React.FunctionComponent = props => {
    return (
        <AppBar position="static" color="primary">
            <NavbarWrapper>
                <LeftSide>
                    <Logo>Nie idź sam na egzamin</Logo>
                </LeftSide>
                <RightSide>
                    <MyProfile>
                        <Typography onClick={() => loginManager.signOut()}>Wyloguj</Typography>
                    </MyProfile>
                </RightSide>
            </NavbarWrapper>
        </AppBar>
    );
};

const NavbarWrapper = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Logo = styled.h3`
    display: flex;
    text-align: left;
    color: white;
    @media only screen and (max-width: 960px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const MyProfile = styled.div`
    margin-right: 2rem;
    text-align: center;
    color: white;
    cursor: pointer;
`;

export default Navbar;
