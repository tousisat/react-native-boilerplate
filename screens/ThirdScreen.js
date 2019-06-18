import React from "react";
import { Container, Content } from "native-base";
import { Text } from "react-native";
import DefaultHeader from "./../components/DefaultHeader";

class ThirdScreen extends React.Component {
  render() {
    return (
      <Container>
        <DefaultHeader title="Third Screen" {...this.props} />
        <Content padder>
          <Text>This is a third screen. Cool Hein?</Text>
        </Content>
      </Container>
    );
  }
}

export default ThirdScreen;
