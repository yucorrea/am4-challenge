import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Store from "../screens/Store";
import StoreDetail from "../screens/StoreDetail";

import { colors } from "../constraints";

const {Navigator, Screen } = createStackNavigator();

const StoreRoutes: React.FC = () => {


  return (
    <Navigator
      screenOptions={{
      headerTintColor: colors.white,
      headerTitleAlign: "center",
      title: "Loja",
      headerStyle: {
        backgroundColor: colors.black,
      }
    }}>
      <Screen name="Store" component={Store} />
      <Screen name="Detail" component={StoreDetail} options={{
        title: "Loja"
      }}/>
    </Navigator>
  )
}

export default StoreRoutes;
