import landingPageBackground from "$assets/landingPageBackground.png";
import landingpageBackgroundMobile from "$assets/landingpageBackgroundMobile.png";
import rectangle from "$assets/rectangle.svg";
import RecoverAccount from "$components/RecoverAccount";
import SignInForm from "$components/SignInForm";
import SignUpForm from "$components/SignUpForm";
import { Tab, Tabs } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
export type LoginSection = "signing_in" | "recover_account";

const LandingPage: React.FunctionComponent = () => {
    const [section, setSection] = useState(0);
    const [loginSection, setLoginSection] = useState<LoginSection>("signing_in");
    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setSection(newValue);
    }
    return (
        <LandingPageWrapper>
            <LeftSide>
                <TitleWrapper>
                    <MainTitle>Nie idź sam na egzamin</MainTitle>
                    <SubTitle>
                        Egzaminy coraz bliżej, a czasu na powtórki coraz mnniej? Spokojnie! Tu wspieramy się nawzajem
                        podczas egzaminów poprzez pamięć i modlitwę
                    </SubTitle>
                </TitleWrapper>
            </LeftSide>
            <RightSide>
                <LoginCard>
                    <Tabs value={section} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                        <Tab label={<TabText>Zaloguj</TabText>} />
                        <Tab label={<TabText>Zarejestruj</TabText>} />
                    </Tabs>
                    {section === 0 &&
                        ((loginSection === "signing_in" && <SignInForm setLoginSection={setLoginSection} />) ||
                            (loginSection === "recover_account" && (
                                <RecoverAccount setLoginSection={setLoginSection} />
                            )))}
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
    flexWrap: "wrap",
});

const RightSide = styled("div")({
    backgroundImage: `url(${landingPageBackground})`,
    backgroundSize: "cover",
    width: "50%",
    position: "relative",
    "@media only screen and (max-width : 960px)": {
        width: "100%",
        backgroundImage: "none",
        height: "100vh",
    },
});

const LeftSide = styled("div")({
    width: "50%",
    display: "grid",
    gridTemplateColumns: "3fr 328px 7fr",
    gridTemplateRows: "3fr auto 7fr",
    "@media only screen and (max-width : 960px)": {
        display: "flex",
        width: "100%",
        zIndex: 10,
        backgroundSize: "cover",
        backgroundImage: `url(${landingpageBackgroundMobile})`,
        height: "100vh",
        // opacity: 0.6,
    },
});

const TitleWrapper = styled("div")({
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 3,
    "@media only screen and (max-width : 960px)": {
        backgroundImage: `url(${rectangle})`,
        padding: "74px 27px 0 27px",
    },
});
const MainTitle = styled("div")({
    letterSpacing: "-0.53px",
    font: "300 60px/72px Roboto",
    marginBottom: "10px",
    "@media only screen and (max-width : 960px)": {
        font: "300 34px/41px Roboto",
        letterSpacing: " 0.24px",
        textAlign: "left",
        opacity: 0.87,
    },
});

const SubTitle = styled("div")({
    font: "300 14px/17px Roboto",
    letterSpacing: "-0.24px",
    opacity: 0.6,
});

const LoginCard = styled("div")({
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "25px",
    opacity: 1,
    padding: "6px 42px",
    position: "absolute",
    width: "412px",
    top: "23vh",
    left: "50%",
    transform: "translate(-50%,0)",
    "@media only screen and (max-width : 960px)": {
        position: "static",
        transform: "translate(0,0)",
        width: "100%",
        borderRadius: "25px",
        padding: "6px 28px",
    },
});

const TabText = styled("div")({
    font: "700 14px/17px Roboto",
    letterSpacing: " 1.25px",
});

export default LandingPage;
