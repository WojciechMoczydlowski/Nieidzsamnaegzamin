import cross from "$assets/cross.svg";
import { UserContext } from "$components/AuthenticationGuard";
import { GradientButton } from "$components/Form";
import firestoreManager from "$services/firestoreManager";
import { px2rem } from "$utils/styles";
import DateFnsUtils from "@date-io/date-fns";
import Dialog from "@material-ui/core/Dialog";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import plLocale from "date-fns/locale/pl";
import React, { useContext, useState } from "react";
import styled from "styled-components";
type AddExamDialogProps = {
    isOpen: boolean;
    close: () => void;
};

const AddExamDialog: React.FunctionComponent<AddExamDialogProps> = ({ close, isOpen }) => {
    const [examName, setExamName] = useState<string>("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [examDate, setExamDate] = useState<Date>(new Date());
    const currentUser = useContext(UserContext);
    const addExam = () => {
        currentUser.uid &&
            currentUser.displayName &&
            firestoreManager.addExam({
                date: examDate.toString(),
                name: examName,
                ownerId: currentUser.uid,
                ownerName: currentUser.displayName,
            });
        close();
    };

    return (
        <Root open={isOpen} onClose={close}>
            <StyledCard>
                <Cross src={cross} alt="cross" onClick={close} />

                <Content>
                    <h2>Dodaj nowy egzamin</h2>
                </Content>

                <Content>
                    <Input value={examName} onChange={e => setExamName(e.target.value)} placeholder={"Egzamin"} />
                </Content>

                <Content>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={plLocale}>
                        <DatePicker
                            format="dd/MM/yyyy"
                            variant="inline"
                            value={examDate}
                            onChange={setExamDate}
                            disablePast
                            onClose={() => setShowDatePicker(false)}
                            autoOk
                            inputVariant={"outlined"}
                        />
                    </MuiPickersUtilsProvider>
                </Content>
                <GradientButton onClick={addExam}>
                    <Text> Dodaj</Text>
                </GradientButton>
            </StyledCard>
        </Root>
    );
};
const Root = styled(Dialog)`
    padding: 16px;
`;

const StyledCard = styled.div`
    position: relative;
    padding: 6px 42px;
    width: ${px2rem(450)};
`;

const Cross = styled.img`
    position: absolute;
    width: ${px2rem(16)};
    top: ${px2rem(24)};
    right: ${px2rem(24)};
    cursor: pointer;
`;

const Content = styled.div`
    margin-bottom: ${px2rem(32)};
`;
const Text = styled.div`
    text-transform: uppercase;
    letter-spacing: 0;
    color: #ffffff;
    font: 500 18px Roboto;
`;

const Input = styled.input`
    border: 1px solid #000000;
    padding: 16px 18px;
    width: 100%;
    opacity: 0.6;
    color: #000000;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    &:focus {
        border: 2px solid #2699fb;
    }
`;

export default AddExamDialog;
