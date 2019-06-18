import React from "react";
import { Header, Left, Icon, Body, Title, Right, Subtitle } from "native-base";

const DefaultHeader = props => (
  <Header style={{ backgroundColor: "black" }}>
    <Left>
      {props.navigation ? (
        <Icon
          style={{ color: "white", paddingLeft: 10 }}
          name="menu"
          onPress={() => props.navigation.openDrawer()}
        />
      ) : null}
    </Left>

    <Body>
      <Title>{props.title}</Title>
      {props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
    </Body>
    {props.navigation ? <Right /> : null}
  </Header>
);

export default DefaultHeader;
