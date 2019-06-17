import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Icon, Container, Content } from "native-base";
import Header from "./../components/Header";

class FirstScreen extends React.Component {
  static navigationOptions = {
    title: "First",
    drawerLabel: "FirstScreen!",
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: "orange" }} />
    )
  };

  render() {
    return (
      <Container>
        <Header title="First Screen" {...this.props} />
        <Content padder>
          <Text>First Screen page!</Text>
          <Button
            title="Go to Second Screen"
            onPress={() => this.props.navigation.navigate("Second")}
          />
          <Button
            title="Open Drawer"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default FirstScreen;
