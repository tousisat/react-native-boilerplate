import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SideDrawer from "./SideDrawer";
import TabNavigation from "./TabNavigation";

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: TabNavigation,
      Main: SideDrawer
    },
    {
      initialRouteName: "Auth"
    }
  )
);
