import React from "react";
import { Route, Switch } from "react-router-dom";
import { ContactsScreen, NewContactScreen, ContactDetailsScreen } from "../module/contacts";

interface GuestNavigationProps {
}

function GuestNavigation() {
  return (
    <Switch>
      <Route exact path="/" component={ContactsScreen}/>
      <Route exact path="/home" component={ContactsScreen}/>
      <Route exact path="/new-contact" component={NewContactScreen}/>
      <Route exact path="/details" component={ContactDetailsScreen}/>
    </Switch>
  );
}

export default GuestNavigation;
