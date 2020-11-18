import React from 'react';
import { View } from 'react-native';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreRoutes from "./store.route";

import { colors, fonts } from "../constraints";
const Tab = createBottomTabNavigator();

const icons : any = {
  Home: {
    name: "home",
    lib: SimpleLineIcons
  },
  Favorites: {
    name: "like2",
    lib: AntDesign
  },
  Store: {
    name: "storefront",
    lib: MaterialIcons
  },
  Download: {
    name: "download",
    lib: AntDesign
  }
}

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Store"
      tabBarOptions={{
        style: {
          backgroundColor: colors.black,
          paddingVertical: 8
        },
        labelStyle: {
          fontFamily: fonts.HindMedium,
        },
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white
      }}
      screenOptions={({route}) => ({
      tabBarIcon: ({color,size}) => {
      const {name, lib: Icon} = icons[route.name];
      return <Icon name={name} size={size} color={color} />
      }
    })}

    >
      <Tab.Screen name="Home" component={View} options={{title: "INÍCIO"}}/>
      <Tab.Screen name="Favorites" component={View} options={{title: "FAVORITOS"}}/>
      <Tab.Screen name="Store" component={StoreRoutes} options={{title: "LOJA"}}/>
      <Tab.Screen name="Download" component={View} options={{title: "DOWNLOAD"}}/>
    </Tab.Navigator>
  )
}

export default AppRoutes;
