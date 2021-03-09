import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { IndexRoute } from "./routes/index-route";
import { NotFoundRoute } from "./routes/not-found-route";

export const Routes: React.FC = () => <Router>
    <Switch>
        <Redirect from="/" exact={true} to="/index" />
        <Route path="/index" component={IndexRoute} />
        <NotFoundRoute />
    </Switch>
</Router>;
