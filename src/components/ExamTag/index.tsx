import { px2rem } from "$utils/styles";
import React from "react";
import styled from "styled-components";
type ExamTagProps = {
    title: string;
};

const ExamTag: React.FunctionComponent<ExamTagProps> = ({ title }) => {
    return <Root>{title}</Root>;
};
const Root = styled.h2`
    color: #b65704;
    background-color: white;
    opacity: 0.9;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    width: ${px2rem(272)};
    padding: ${px2rem(24)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media only screen and (max-width: 960px) {
        width: 100%;
        padding: ${px2rem(12)};
    }
`;
export default ExamTag;
