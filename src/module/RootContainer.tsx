import React from "react";
import { SwitchNavigation } from "../navigation";
import { MainProvider } from "../provider";

interface RootContainerProps {}

function RootContainer() {
  return (
    <MainProvider>
      <SwitchNavigation />
    </MainProvider>
  );
}

export default RootContainer;
