import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import HomeMenu from './src/components/HomeMenu/HomeMenu';
import Comments from './src/screens/Comments/Comments';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  options = {{headerShown:false}} name="Login" component={Login} ></Stack.Screen>
            <Stack.Screen options = {{headerShown:false}} name="Register" component={Register} ></Stack.Screen>
            <Stack.Screen options = {{headerShown:false}} name="HomeMenu" component={HomeMenu} ></Stack.Screen>
            <Stack.Screen options = {{headerShown:false}} name="Comments" component={Comments} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

