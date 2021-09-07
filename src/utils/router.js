import React from "react";

import { Switch, Route } from "react-router-dom";
import CreateAccoutPAge from "../components/registration/index";
import Dashboard from "../components/dashboard/home/index";
import CardPage from "../components/dashboard/cards/index";

const router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <CreateAccoutPAge />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/card">
          <CardPage />
        </Route>
      </Switch>
    </>
  );
};

export default router;
