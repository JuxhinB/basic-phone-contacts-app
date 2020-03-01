import React from "react";
import { GuestNavigation } from ".";
import { BrowserRouter } from "react-router-dom";

/**
 * @class SwitchNavigation
 * @description  React Component. This is the navigations's switcher.
 * Can be used in case there is the scenario where a router can replace another
 * for different purposes.
 * @return {JSX.Element} JSX.Element
 */
function SwitchNavigation(): JSX.Element {
  return (
    <BrowserRouter>
      <GuestNavigation/>
    </BrowserRouter>
  );
}

export default SwitchNavigation;
