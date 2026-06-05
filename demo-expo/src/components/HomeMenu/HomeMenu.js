import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Home from '../../screens/Home/Home';
import User from '../../screens/User/User';
import Post from '../../screens/Post/Post';
const Tab = createBottomTabNavigator()
function HomeMenu(props){
    return(
        <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
            <Tab.Screen name='Home' component={Home} options={
                {    headerShown:false,
                     tabBarIcon: ()=> <Feather  name="home" size={24} color="black" marginTop="15px" />
                }
                }/>
            <Tab.Screen name='Post' component={Post} options={
                {    headerShown:false,
                     tabBarIcon: ()=> <Feather name="plus-circle" size={24} color="black" weight = "700"/>

                }
                }/>
            <Tab.Screen name='Profile' component={User}options={
                {   headerShown:false,
                    tabBarIcon: ()=> <Feather name="user" size={24} color="black" marginTop="15px" />
                }
                }/>
        </Tab.Navigator>
    )

}
export default HomeMenu;