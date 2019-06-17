import React from "react";
import { StyleSheet, Text, View } from "react-native";

class SecondScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "SecondScreen"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Second Screen page!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SecondScreen;
