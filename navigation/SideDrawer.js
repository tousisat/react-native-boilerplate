import { createDrawerNavigator } from "react-navigation";

import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";

const SideDrawer = createDrawerNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen
  },
  {
    drawerBackgroundColor: "lightgray"
  }
);

export default SideDrawer;
