import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
const Navbar: React.FunctionComponent = props => {
    return (
        <AppBar position="static" color="primary">
            <NavbarWrapper>
                <LeftSide>
                    <Logo variant="h5">Nie idź sam na egzamin</Logo>
                </LeftSide>
                <RightSide>
                    <MyProfile>
                        <Typography>Profil</Typography>
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

const Logo = styled(Typography)`
    display: flex;
    text-align: left;
    color: white;
`;

const LeftSide = styled.div`
    width: 30%;
`;

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
