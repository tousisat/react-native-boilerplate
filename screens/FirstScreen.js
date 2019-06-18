import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

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
          <Text>Counter: {this.props.counter}</Text>
          <Button
            title="Increment counter with redux"
            onPress={() => this.props.onIncrementCounter()}
          />
          <Button
            title="Add 5 to counter with redux"
            onPress={() => this.props.onAddToCounter(5)}
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

const mapStateToProps = state => {
  return {
    counter: state.firstScreen.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actions.onIncrementCounter()),
    onAddToCounter: number => dispatch(actions.onAddToCounter(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstScreen);
