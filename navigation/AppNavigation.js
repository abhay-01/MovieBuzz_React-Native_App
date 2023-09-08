import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen' 

const Stack = createStackNavigator();

const AppNavigation = () => {  
  return (
    <NavigationContainer> 
        <Stack.Navigator>
            <Stack.Screen
            name = "Home"
            component = {HomeScreen} // This is the component that will be rendered
            options = {{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation