import React from "react";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components"
type AddExamDialogProps = {
    isOpen: boolean;
    close:() => void
}

const AddExamDialog: React.FunctionComponent<AddExamDialogProps> = (props)=> {
    return( <Root open = {props.isOpen}>
            
        </Root >);
};
const Root = styled(Dialog)`
    height: 50vh;
    padding:16px;
 `
export default AddExamDialog;
