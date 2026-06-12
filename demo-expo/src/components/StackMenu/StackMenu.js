import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import Comments from '../../screens/Comments/Comments';
const Stack = createNativeStackNavigator()

function StackMenu() {
  return (
        <Stack.Navigator>
            <Stack.Screen options = {{headerShown:false}} name="Home" component={Home}></Stack.Screen>
            <Stack.Screen options = {{headerShown:false}} name="Comments" component={Comments} ></Stack.Screen>
        </Stack.Navigator>
  );
}

export default StackMenu