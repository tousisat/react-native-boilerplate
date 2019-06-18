import React, { useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/AppNavigator";

const App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={err => console.warn("OUPS", err)}
        onFinish={() => setLoadingComplete(true)}
      />
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
        }}
      >
        <AppNavigator />
      </View>
    );
  }
};

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ...Ionicons.font,
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    })
  ]);
}

export default App;
