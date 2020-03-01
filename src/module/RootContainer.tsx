import React from "react";
import { SwitchNavigation } from "../navigation";
import { MainProvider } from "../provider";

/**
 * @class RootContainer
 * @description  React Component. Root container, here rest all global providers
 * and the SwitchNavigation.
 * @return {JSX.Element} JSX.Element
 */
function RootContainer(): JSX.Element {
  return (
    <MainProvider>
      <SwitchNavigation/>
    </MainProvider>
  );
}

export default RootContainer;
