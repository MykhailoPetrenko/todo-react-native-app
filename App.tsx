import React from "react";
import {HomePage, TodoPage} from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
            {props => <HomePage {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="Todo"  options={{ headerShown: false }} >
            {props => <TodoPage {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
