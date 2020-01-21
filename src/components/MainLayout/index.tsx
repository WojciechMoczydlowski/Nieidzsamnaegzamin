import background from "$assets/background.jpg";
import AddExamButton from "$components/AddExamButton";
import AddExamDialog from "$components/AddExamDialog";
import Navbar from "$components/Navbar";
import React, { useState } from "react";
import styled from "styled-components";

const MainLayout: React.FunctionComponent = props => {
    const [isOpenAddExamDialog, setIsOpenAddExamDialog] = useState(false);
    return (
        <Root>
            <Navbar />
            {props.children}
            <AddExamButton open={() => setIsOpenAddExamDialog(true)} />
            <AddExamDialog isOpen={isOpenAddExamDialog} close={() => setIsOpenAddExamDialog(false)} />
        </Root>
    );
};

const Root = styled.div`
    min-height: 100vh;
    height: 100vh;
    width: 100%;
    overflow: hidden scroll;
    padding-bottom: 2rem;
    &::after {
        content: "";
        filter: brightness(0.85);
        background: url(${background}) no-repeat center center;
        background-size: cover;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

    @media only screen and (max-width: 960px) {
        ::-webkit-scrollbar {
            width: 0;
        }
    }
`;

export default MainLayout;
