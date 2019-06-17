import React from "react";
import { Header, Left, Icon, Body, Title, Right } from "native-base";

const HeaderTop = props => (
  <Header style={{ backgroundColor: "red" }}>
    <Left>
      <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
    <Right />
  </Header>
);

export default HeaderTop;
