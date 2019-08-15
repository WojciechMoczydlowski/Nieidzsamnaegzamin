import HomePage from "$pages/Home";
import React from "react";
import { Route, Switch } from "react-router";
import "./styles/global-styles.scss";

const AppRouter: React.FunctionComponent = () => (
    <Switch>
        {/* <Route
      path={routes.categories.productsInCategory.pattern}
      component={ProductsInCategory}
      exact
    /> */}
        <Route component={HomePage} />
    </Switch>
);
export default React.memo(AppRouter);
