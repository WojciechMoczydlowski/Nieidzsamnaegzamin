import AddExamButton from "$components/AddExamButton";
import AddExamDialog from "$components/AddExamDialog";
import Navbar from "$components/Navbar";
import { px2rem } from "$utils/styles";
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
    margin-bottom: ${px2rem(16)};
`;

export default MainLayout;
