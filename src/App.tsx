import MainLayout from "$components/MainLayout";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import "./styles/global-styles.scss";
import { theme } from "./theme";

const App: React.FunctionComponent = () => (
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <MainLayout>
                <AppRouter />
            </MainLayout>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default React.memo(App);
