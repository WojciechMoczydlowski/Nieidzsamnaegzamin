import { px2rem } from "$utils/styles";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import styled from "styled-components";
type AddExamButtonProps = {
    open: () => void;
};

const AddExamButton: React.FunctionComponent<AddExamButtonProps> = ({ open }) => {
    return (
        <Root>
            <Fab color="primary" aria-label="add" onClick={open}>
                <AddIcon htmlColor={"white"} />
            </Fab>
        </Root>
    );
};

const Root = styled.div`
    position: fixed;
    bottom: ${px2rem(16)};
    right: ${px2rem(16)};
`;

export default AddExamButton;
