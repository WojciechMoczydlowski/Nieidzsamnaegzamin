import SignInForm from "$components/SignInForm";
import SignUpForm from "$components/SignUpForm";
import { Card, DialogContent } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";

export type SingingSection = "signing_in" | "signing_up";

const Login: React.FunctionComponent = () => {
    const [singingSection, setSingingSection] = useState<SingingSection>("signing_in");

    return (
        <StyledCard>
            <Title>Nie idź sam na egzamin</Title>
            <DialogContent>
                {(singingSection === "signing_in" && <SignInForm setSingingSection={setSingingSection} />) ||
                    (singingSection === "signing_up" && <SignUpForm setSingingSection={setSingingSection} />)}
            </DialogContent>
        </StyledCard>
    );
};

const Title = styled("h2")({
    width: "100%",
    textAlign: "center",
});

const StyledCard = styled(Card)({
    width: "30%",
    margin: "250px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    padding: "20px",
});

export default Login;
