import React from "react";
import { connect } from "react-redux";

import { createBottomTabNavigator } from "react-navigation";

import { Icon } from "native-base";
import { Text, View } from "react-native";

import SignInScreen from "./../screens/SignInScreen";
import SignUpScreen from "./../screens/SignUpScreen";

const customTabBarLabel = props => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text style={{ color: props.tintColor, fontSize: 12 }}>
      {props.label + (props.showCounter ? ": " + props.counter : "")}
    </Text>
  </View>
);

const mapStateToProps = state => {
  return {
    counter: state.firstScreen.counter
  };
};

const CustomTabBarLabel = connect(mapStateToProps)(customTabBarLabel);

const customTabBarIcon = (tintColor, icon, iconType) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10
    }}
  >
    <Icon style={{ color: tintColor }} type={iconType} name={icon} />
  </View>
);

const TabNavigation = createBottomTabNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        switch (navigation.state.routeName) {
          case "SignIn":
            return customTabBarIcon(tintColor, "person", "MaterialIcons");
          case "SignUp":
            return customTabBarIcon(tintColor, "person-add", "MaterialIcons");
          default:
            return null;
        }
      },
      tabBarLabel: ({ tintColor }) => {
        switch (navigation.state.routeName) {
          case "SignIn":
            return (
              <CustomTabBarLabel
                tintColor={tintColor}
                label="Sign In"
                showCounter
              />
            );
          case "SignUp":
            return <CustomTabBarLabel tintColor={tintColor} label="Sign Up" />;
          default:
            return null;
        }
      },
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    })
  }
);

export default TabNavigation;
