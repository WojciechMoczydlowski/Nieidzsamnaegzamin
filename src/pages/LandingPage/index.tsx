import landingPageBackground from "$assets/landingPageBackground.png";
import SignInForm from "$components/SignInForm";
import SignUpForm from "$components/SignUpForm";
import { Tab, Tabs } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
export type SingingSection = "signing_in" | "signing_up";

const LandingPage: React.FunctionComponent = () => {
    const [section, setSection] = useState(0);
    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setSection(newValue);
    }
    return (
        <LandingPageWrapper>
            <LeftSide></LeftSide>
            <RightSide>
                <LoginCard>
                    <Tabs value={section} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                        <Tab label={<TabText>Zaloguj</TabText>} />
                        <Tab label={<TabText>Zarejestruj</TabText>} />
                    </Tabs>
                    {section === 0 && <SignInForm />}
                    {section === 1 && <SignUpForm />}
                </LoginCard>
            </RightSide>
        </LandingPageWrapper>
    );
};

const LandingPageWrapper = styled("div")({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
});

const RightSide = styled("div")({
    backgroundImage: `url(${landingPageBackground})`,
    backgroundSize: "cover",
    width: "50%",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gridTemplateRows: "202fr auto 168fr",
});

const LoginCard = styled("div")({
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "25px",
    opacity: 1,
    height: "530px",
    width: "412px",
    padding: "6px 42px",
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 3,
});

const LeftSide = styled("div")({
    width: "50%",
});

const TabText = styled("div")({
    font: "700 14px/17px Roboto",
    letterSpacing: " 1.25px",
});

export default LandingPage;
