import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { Container, Content } from "native-base";
import DefaultHeader from "./../components/DefaultHeader";

class FirstScreen extends React.Component {
  render() {
    return (
      <Container>
        <DefaultHeader title="First Screen" {...this.props} />
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
