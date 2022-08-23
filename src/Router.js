import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "./pages/WelcomeScreen";
import MemberScreen from "./pages/MemberScreen";
import MemberResult from "./pages/MemberResult";

const Stack = createNativeStackNavigator();

function App(){

  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <Stack.Screen name="MemberScreen" component={MemberScreen}/>
          <Stack.Screen name="MemberResult" component={MemberResult}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;