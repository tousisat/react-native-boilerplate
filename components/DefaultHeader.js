import React from "react";
import { Header, Left, Icon, Body, Title, Right } from "native-base";

const DefaultHeader = props => (
  <Header style={{ backgroundColor: "black" }}>
    <Left>
      <Icon
        style={{ color: "white", paddingLeft: 10 }}
        name="menu"
        onPress={() => props.navigation.openDrawer()}
      />
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
    <Right />
  </Header>
);

export default DefaultHeader;
