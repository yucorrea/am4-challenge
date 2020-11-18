import 'react-native-gesture-handler';
import SplashScreen from "react-native-splash-screen";

import React, {useEffect} from 'react';
import { StatusBar} from 'react-native';

import { colors} from "./constraints";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

const App: React.FC = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.black}/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  )
};

export default App;
