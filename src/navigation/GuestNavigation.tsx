import React from "react";
import { Route, Switch } from "react-router-dom";
import { ContactsScreen } from "../module/contacts";

interface GuestNavigationProps {}

function GuestNavigation() {
  return (
    <Switch>
      <Route exact path="/" component={ContactsScreen} />
      <Route exact path="/register" component={ContactsScreen} />
    </Switch>
  );
}

export default GuestNavigation;
