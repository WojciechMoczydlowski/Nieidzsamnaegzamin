import landingPageBackground from "$assets/landingPageBackground.png";
import landingpageBackgroundMobile from "$assets/landingpageBackgroundMobile.png";
import rectangle from "$assets/rectangle.svg";
import RecoverAccount from "$components/RecoverAccount";
import SignInForm from "$components/SignInForm";
import SignUpForm from "$components/SignUpForm";
import { Tab, Tabs } from "@material-ui/core";
import  styled  from "styled-components";
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

const LandingPageWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const RightSide = styled.div`

    background-image: url(${landingPageBackground});
    background-size: cover;
    width: 50%;
    position: relative;
    @media only screen and (max-width : 960px){
        width: 100%;
        background-image: none;
        height: 100vh;
    };
`

const LeftSide = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 3fr 328px 7fr;
    grid-template-rows: 3fr auto 7fr;
    @media only screen and (max-width : 960px){
        display: flex;
        width: 100%;
        z-index: 10;
        background-size: cover;
        background-image: url(${landingpageBackgroundMobile});
        height: 100vh;
        opacity: 0.6,
    };
`


const TitleWrapper = styled.div`

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    @media only screen and (max-width : 960px){
        background-image: url(${rectangle});
        padding: 74px 27px 0 27px,
    };
`
const MainTitle = styled.div`
    letter-spacing: -0.53px;
    font: 300 60px/72px Roboto;
    margin-bottom: 10px;
    @media only screen and (max-width : 960px){
        font: 300 34px/41px Roboto;
        letter-spacing: 0.24px;
        text-align: left;
        opacity: 0.87
    }
`

const SubTitle = styled.div`
    font: 300 14px/17px Roboto;
    letter-spacing: -0.24px;
    opacity: 0.6;
`
   
const LoginCard = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    padding: 6px 42px;
    position: absolute;
    width: 412px;
    top: 23vh;
    left: 50%;
    transform: translate(-50%,0);
    @media only screen and (max-width : 960px){
        position: static;
        transform: translate(0,0);
        width: 100%;
        border-radius: 25px;
        padding: 6px 28px;
    }
`
 
const TabText = styled.div`
    font: 700 14px/17px Roboto;
    letter-spacing: 1.25px;
`

export default LandingPage;
