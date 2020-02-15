import React from "react";
import { Route, Switch } from "react-router-dom";
import { ContactsScreen, NewContactScreen } from "../module/contacts";

interface GuestNavigationProps {
}

function GuestNavigation() {
  return (
    <Switch>
      <Route exact path="/" component={ContactsScreen}/>
      <Route exact path="/home" component={ContactsScreen}/>
      <Route exact path="/new-contact" component={NewContactScreen}/>
    </Switch>
  );
}

export default GuestNavigation;
