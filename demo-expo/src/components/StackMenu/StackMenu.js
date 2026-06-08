import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import Comment from '../../screens/Comment/Comment';
const Stack = createNativeStackNavigator()

function StackMenu() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options = {{headerShown:false}} name="Home" component={Home}></Stack.Screen>
            <Stack.Screen options = {{headerShown:false}} name="Comment" component={Comment} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default StackMenu