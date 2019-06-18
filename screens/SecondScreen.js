import React from "react";
import { Col, Grid } from "react-native-easy-grid";
import { Container, Content } from "native-base";
import DefaultHeader from "./../components/DefaultHeader";

class SecondScreen extends React.Component {
  render() {
    return (
      <Container>
        <DefaultHeader title="Second Screen" {...this.props} />
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
