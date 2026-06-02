import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Home from '../../screens/Home/Home';
import User from '../../screens/User/User';
const Tab = createBottomTabNavigator()
function HomeMenu(props){
    return(
        <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
            <Tab.Screen name='Home' component={Home} options={
                {
                     tabBarIcon: ()=> <AntDesign name="home" size={24} color="black" />
                }
                }/>
            <Tab.Screen name='Profile' component={User}options={
                {
                    tabBarIcon: ()=> <AntDesign name="user" size={24} color="black" />
                }
                }/>
        </Tab.Navigator>
    )

}
export default HomeMenu;