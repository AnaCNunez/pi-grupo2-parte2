import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Home from '../../screens/Home/Home';
import User from '../../screens/User/User';
import Post from '../../screens/Post/Post';
import { StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator()
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    color: '#7C3AED',
  }})
function HomeMenu(props){
    return(
        <Tab.Navigator  screenOptions={{tabBarShowLabel:false}}>
            <Tab.Screen style = {styles.tab} name='Home' component={Home} options={
                {    headerShown:false,
                     tabBarIcon: ()=> <Feather  name="home" size={24} color="black" marginTop="15px" />
                }
                }/>
            <Tab.Screen style = {styles.tab} name='Post' component={Post} options={
                {    headerShown:false,
                     tabBarIcon: ()=> <Feather name="plus-circle" size={24} color="black" weight = "700"/>

                }
                }/>
            <Tab.Screen style = {styles.tab} name='Profile' component={User}options={
                {   headerShown:false,
                    tabBarIcon: ()=> <Feather name="user" size={24} color="black" marginTop="15px" />
                }
                }/>
        </Tab.Navigator>
    )

}
export default HomeMenu;