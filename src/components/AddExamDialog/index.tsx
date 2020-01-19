import cross from "$assets/cross.svg";
import { UserContext } from "$components/AuthenticationGuard";
import { DefaultButton, StyledInput } from "$components/Form";
import firestoreManager from "$services/firestoreManager";
import { px2rem } from "$utils/styles";
import MomentUtils from "@date-io/moment";
import Dialog from "@material-ui/core/Dialog";
import { DatePicker, MaterialUiPickersDate, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import "moment/locale/pl";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import uuid from "uuid";
type AddExamDialogProps = {
    isOpen: boolean;
    close: () => void;
};

const AddExamDialog: React.FunctionComponent<AddExamDialogProps> = ({ close, isOpen }) => {
    const [examName, setExamName] = useState<string>("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [examDate, setExamDate] = useState(new Date());
    const currentUser = useContext(UserContext);
    const updateDate = (date: Date | null) => {
        date && setExamDate(date);
    };
    const setDate = (date: MaterialUiPickersDate) => {
        date && setExamDate(date.toDate());
    };
    const addExam = () => {
        currentUser.uid &&
            currentUser.displayName &&
            firestoreManager.addExam({
                id: uuid(),
                date: examDate ? examDate.toString() : "",
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
                    <StyledInput value={examName} onChange={e => setExamName(e.target.value)} placeholder={"Egzamin"} />
                </Content>

                <Content>
                    <MuiPickersUtilsProvider utils={MomentUtils} locale={moment.locale("pl")}>
                        <DatePicker
                            format="DD MMMM YYYY"
                            variant="inline"
                            value={examDate}
                            onChange={setDate}
                            disablePast
                            onClose={() => setShowDatePicker(false)}
                            autoOk
                            inputVariant={"outlined"}
                        />
                    </MuiPickersUtilsProvider>
                </Content>
                <DefaultButton onClick={addExam}>
                    <Text> Dodaj</Text>
                </DefaultButton>
            </StyledCard>
        </Root>
    );
};
const Root = styled(Dialog)`
    padding: 16px;
    top: 0;
    @media only screen and (max-width: 960px) {
        > div {
            > div {
                margin: 0;
            }
        }
    }
`;

const StyledCard = styled.div`
    position: relative;
    padding: 6px 42px;
    width: ${px2rem(450)};
    @media only screen and (max-width: 960px) {
        width: 100%;
        height: 100%;
    }
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

export default AddExamDialog;
