import AuthenticationGuard from "$components/AuthenticationGuard";
import MainLayout from "$components/MainLayout";
import Home from "$pages/Home";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/global-styles.scss";
import { theme } from "./theme";

const App: React.FunctionComponent = () => (
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <MainLayout>
                <AuthenticationGuard>
                    <Home />
                </AuthenticationGuard>
            </MainLayout>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default React.memo(App);
