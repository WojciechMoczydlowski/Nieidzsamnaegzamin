import AddExamButton from "$components/AddExamButton";
import AddExamDialog from "$components/AddExamDialog";
import Navbar from "$components/Navbar";
import React, { useState } from "react";

const MainLayout: React.FunctionComponent = props => {
    const [isOpenAddExamDialog, setIsOpenAddExamDialog] = useState(true);
    return (
        <>
            <Navbar />
            {props.children}
            <AddExamButton open={() => setIsOpenAddExamDialog(true)} />
            <AddExamDialog isOpen={isOpenAddExamDialog} close={() => setIsOpenAddExamDialog(false)} />
        </>
    );
};

export default MainLayout;
