import { UserContext } from "$components/AuthenticationGuard";
import firestoreManager from "$services/firestoreManager";
import { resetButton } from "$styles/reset";
import { formatDateToddMMMMyyyy } from "$utils/date";
import { px2rem } from "$utils/styles";
import React, { useContext } from "react";
import styled from "styled-components";
type PrayTileProps = {
    exam: Exam;
};

const PrayTile: React.FunctionComponent<PrayTileProps> = ({ exam }) => {
    const currentUser = useContext(UserContext);
    const displaySupportButton =
        (!exam.support || exam.support.length < 3) &&
        !(
            (currentUser.displayName && exam.support && exam.support.includes(currentUser.displayName)) ||
            currentUser.displayName === exam.ownerName
        );
    const displayResignButton =
        currentUser.displayName && exam.support && exam.support.includes(currentUser.displayName);
    const deleteButton = currentUser.displayName === exam.ownerName;
    return (
        <Root>
            <LeftSide>
                <DarkItem> {exam.ownerName}</DarkItem>
                <DarkItem>{exam.name}</DarkItem>
                <DarkItem>{formatDateToddMMMMyyyy(exam.date)}</DarkItem>
            </LeftSide>
            <RightSide>
                <Support>
                    {exam.support && exam.support.map((item, i) => <LightItem key={i}>{item}</LightItem>)}
                </Support>
                {displaySupportButton && (
                    <div>
                        <ActionButton
                            variant={"primary"}
                            onClick={() =>
                                currentUser.displayName &&
                                firestoreManager.signForExam(exam.id, currentUser.displayName)
                            }>
                            Wesprzyj
                        </ActionButton>
                    </div>
                )}
                {displayResignButton && (
                    <div>
                        <ActionButton
                            variant={"resign"}
                            onClick={() =>
                                currentUser.displayName &&
                                firestoreManager.resignFromExam(exam.id, currentUser.displayName)
                            }>
                            Zrezygnuj
                        </ActionButton>
                    </div>
                )}
                {deleteButton && (
                    <div>
                        <ActionButton
                            variant={"resign"}
                            onClick={() => currentUser.displayName && firestoreManager.deleteExam(exam.id)}>
                            Usuń
                        </ActionButton>
                    </div>
                )}
            </RightSide>
        </Root>
    );
};

type ButtonVariant = "primary" | "resign";

const Root = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${px2rem(20)};
    padding: ${px2rem(28)} ${px2rem(40)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media only screen and (max-width: 960px) {
        flex-direction: column;
        padding: ${px2rem(16)} ${px2rem(28)};
    }
`;

const Item = styled.div`
    font-size: 18px;
    line-height: 22px;
`;

const DarkItem = styled(Item)`
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
`;

const LightItem = styled(Item)`
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    margin-right: ${px2rem(16)};

    color: rgba(38, 45, 50, 0.6);
`;

const LeftSide = styled.div`
    display: flex;
    justify-content: space-between;
    width: 48%;
    @media only screen and (max-width: 960px) {
        width: 100%;
        flex-direction: column;
        > div {
            margin-top: ${px2rem(8)};
        }
    }
`;

const RightSide = styled.div`
    display: flex;
    width: 48%;

    @media only screen and (max-width: 960px) {
        width: 100%;
        flex-direction: column;
        > div {
            margin-top: ${px2rem(20)};
        }
    }
`;

const Support = styled.div`
    display: flex;
    width: 100%;
`;

const ActionButton = styled.button<{ variant: ButtonVariant }>`
    ${resetButton}
    border-radius: 6px;

    background-color: ${p => (p.variant === "primary" ? "#fb8d3e" : "white")};
    color: ${p => (p.variant === "primary" ? "white" : "rgba(38, 45, 50, 0.6)")};
    border: ${p => (p.variant === "primary" ? "none" : " 1px solid rgba(38, 45, 50, 0.6)")};

    padding: ${px2rem(12)} ${px2rem(32)};
    font-weight: bold;
    cursor: pointer;

    :hover {
        background-color: ${p => (p.variant === "primary" ? "#ea7c2b" : "#fc828b")};
        color: white;
    }
    :active {
        background-color: ${p => (p.variant === "primary" ? "#ea7c2b" : "#fc828b")};
        color: white;
    }
    /* @media only screen and (max-width: 960px) {
        font-size: 10px;
        line-height: 12px;
    } */
`;

export default PrayTile;
