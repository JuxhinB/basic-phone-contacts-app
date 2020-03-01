import React from "react";
import { Route, Switch } from "react-router-dom";
import { ContactsScreen, NewContactScreen, ContactDetailsScreen } from "../module/contacts";

/**
 * @class GuestNavigation
 * @description  React Component. This is one of the default navigation.
 * Here rest all the screen with their belonging routes.
 * @return {JSX.Element} JSX.Element
 */
function GuestNavigation(): JSX.Element {
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
