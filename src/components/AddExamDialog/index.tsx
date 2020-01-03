import React from "react";
import Dialog from "@material-ui/core/Dialog";

type AddExamDialogProps = {
    isOpen: boolean;
    close:() => void
}

const AddExamDialog: React.FunctionComponent<AddExamDialogProps> = (props)=> {
    return( <Dialog open = {props.isOpen}>

        </Dialog >);
};

export default AddExamDialog;
