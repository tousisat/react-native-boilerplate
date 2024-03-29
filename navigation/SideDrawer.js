import React from "react";
import { connect } from "react-redux";

import { Text, View, Image } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import {
  Icon,
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body
} from "native-base";

import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "./../screens/ThirdScreen";

const CustomItemsList = (itemsArray, props) =>
  itemsArray.map(({ navId, icon, iconType, title }) => (
    <ListItem key={navId} icon onPress={() => props.navigation.navigate(navId)}>
      <Left>
        <Icon name={icon} type={iconType ? iconType : "Ionicons"} />
      </Left>
      <Body>
        <Text
          style={{
            color: props.activeItemKey === navId ? "tomato" : "black"
          }}
        >
          {title}
        </Text>
      </Body>
    </ListItem>
  ));

const CustomDrawerComponent = props => {
  return (
    <Container>
      <View
        style={{
          height: 150,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={require("../assets/side-drawer-logo.png")}
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </View>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text style={{ color: "grey" }}>Section 1</Text>
          </ListItem>
          {CustomItemsList(
            [
              {
                navId: "First",
                icon: "home",
                title: "First Screen"
              },
              {
                navId: "Second",
                icon: "settings",
                title: "Second Screen"
              }
            ],
            props
          )}
          <ListItem itemDivider>
            <Text style={{ color: "grey" }}>Section 2</Text>
          </ListItem>
          {CustomItemsList(
            [
              {
                navId: "Third",
                icon: "information-circle",
                title: "Third Screen"
              }
            ],
            props
          )}
          <ListItem itemDivider>
            <Text style={{ color: "grey" }}>
              Redux Counter: {props.counter}
            </Text>
          </ListItem>
          {CustomItemsList(
            [
              {
                navId: "Auth",
                icon: "logout",
                iconType: "MaterialCommunityIcons",
                title: "logout"
              }
            ],
            props
          )}
        </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.firstScreen.counter
  };
};

const SideDrawer = createDrawerNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen,
    Third: ThirdScreen
  },
  {
    contentComponent: connect(mapStateToProps)(CustomDrawerComponent)
  }
);

export default SideDrawer;
