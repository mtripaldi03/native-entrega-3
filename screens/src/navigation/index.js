import React from "react";
import { NativeAppEventEmitter } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import BaseNavigator from "./tienda";

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <BaseNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;