import { resetButton } from "$styles/reset";
import { formatDateToddMMMMyyyy } from "$utils/date";
import { px2rem } from "$utils/styles";
import React from "react";
import styled from "styled-components";
type PrayTileProps = {
    exam: Exam;
};

const PrayTile: React.FunctionComponent<PrayTileProps> = ({ exam }) => {
    console.log(exam);
    return (
        <Root>
            <LeftSide>
                <DarkItem> {exam.ownerName}</DarkItem>
                <DarkItem>{exam.name}</DarkItem>
                <DarkItem>{formatDateToddMMMMyyyy(exam.date)}</DarkItem>
            </LeftSide>
            <RightSide>
                <Support>
                    <LightItem>{exam.ownerName}</LightItem>
                    <LightItem>{exam.ownerName}</LightItem>
                    <LightItem>{exam.ownerName}</LightItem>
                </Support>
                <div>
                    <ActionButton variant="contained" color="primary">
                        Wesprzyj
                    </ActionButton>
                </div>
            </RightSide>
        </Root>
    );
};

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
    @media only screen and (max-width: 960px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

const DarkItem = styled(Item)`
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    @media only screen and (max-width: 960px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

const LightItem = styled(Item)`
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    @media only screen and (max-width: 960px) {
        font-size: 12px;
        line-height: 15px;
    }

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

const ActionButton = styled.button`
    ${resetButton}
    border-radius: 6px;
    background-color: #fb8d3e;
    color: white;
    padding: ${px2rem(12)} ${px2rem(32)};
    font-weight: bold;
    cursor: pointer;

    :hover {
        background-color: #ea7c2d;
    }
    :active {
        background-color: #ea7c2d;
    }
    @media only screen and (max-width: 960px) {
        font-size: 10px;
        line-height: 12px;
    }
`;

export default PrayTile;
