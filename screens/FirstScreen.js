import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class FirstScreen extends React.Component {
  static navigationOptions = {
    title: "First",
    drawerLabel: "FirstScreen!"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>First Screen page!</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => this.props.navigation.navigate("Second")}
        />
        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
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

export default FirstScreen;
