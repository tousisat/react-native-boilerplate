import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content } from "native-base";
import Header from "./../components/Header";

class SecondScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "SecondScreen"
  };

  render() {
    return (
      <Container>
        <Header title="Second Screen" {...this.props} />
        <Content padder>
          <Grid>
            <Col style={{ backgroundColor: "#635DB7", height: 200 }} />
            <Col style={{ backgroundColor: "#00CE9F", height: 200 }} />
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default SecondScreen;
