import React from "react";
import { Text, Button } from "react-native";
import { Container, Content } from "native-base";
import DefaultHeader from "../components/DefaultHeader";

class SignInScreen extends React.Component {
  render() {
    return (
      <Container>
        <DefaultHeader title="Authentification" />
        <Content padder>
          <Text>SignIn Screen page!</Text>
          <Button
            title="SignIn"
            onPress={() => this.props.navigation.navigate("Main")}
          />
        </Content>
      </Container>
    );
  }
}

export default SignInScreen;
