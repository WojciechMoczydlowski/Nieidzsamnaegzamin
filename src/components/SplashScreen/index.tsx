import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
export const SplashScreen: React.FunctionComponent = () => {
    return (
        <Background>
            <LoaderContainer>
                <CircularProgress />
            </LoaderContainer>
        </Background>
    );
};

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 1000;

    background: rgba(200, 200, 200, 0.3);
`;

const LoaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;
