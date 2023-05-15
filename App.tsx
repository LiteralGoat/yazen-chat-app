import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Chat from './app/screens/Chat';
import Login from './app/screens/Login';
import React from 'react';
import { View } from 'react-native';
import { chatHeader, loginHeader } from './app/components/Header';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={loginHeader} name="Login" component={Login} />
          <Stack.Screen options={{gestureEnabled: false, ...chatHeader}} name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
