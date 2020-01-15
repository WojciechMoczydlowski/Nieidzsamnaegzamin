import { px2rem } from "$utils/styles";
import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
const Footer: React.FunctionComponent = props => {
    return (
        <Root>
            <Text>Created by Wojciech Moczydłowski</Text>
        </Root>
    );
};

const Root = styled.div`
    width: 100%;
    min-height: 64px;
    padding: ${px2rem(16)};
    margin-top: ${px2rem(16)};
    background-color: #fb8d3e;
`;

const Text = styled(Typography)`
    color: white;
`;

export default Footer;
