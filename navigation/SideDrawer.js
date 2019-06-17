import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";

import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";

const CustomDrawerComponent = props => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../assets/side-drawer-logo.png")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);

const SideDrawer = createDrawerNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen
  },
  {
    drawerBackgroundColor: "lightgray",
    contentComponent: CustomDrawerComponent
  }
);

export default SideDrawer;
