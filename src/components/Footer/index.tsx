import { styled } from "@material-ui/styles";
import React from "react";

const Footer: React.FunctionComponent = props => {
    return <FooterWrapper>Footer</FooterWrapper>;
};

const FooterWrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    width: "100%",
    height: "200px",
    color: "white",
    backgroundColor: "black",
});

export default React.memo(Footer);
