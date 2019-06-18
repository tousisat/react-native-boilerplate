import React from "react";
import { Text, Button } from "react-native";
import { Container, Content } from "native-base";
import DefaultHeader from "../components/DefaultHeader";

class SignUpScreen extends React.Component {
  render() {
    return (
      <Container>
        <DefaultHeader title="Authentification" />
        <Content padder>
          <Text>SignUp Screen page!</Text>
          <Button
            title="SignUp"
            onPress={() => this.props.navigation.navigate("Main")}
          />
        </Content>
      </Container>
    );
  }
}

export default SignUpScreen;
