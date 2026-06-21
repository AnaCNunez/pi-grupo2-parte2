import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logo from '../Logo/Logo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Home from '../../screens/Home/Home';
import User from '../../screens/User/User';
import NuevoPost from '../../screens/NuevoPost/NuevoPost';
import StackMenu from '../StackMenu/StackMenu';
import { StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator()
const styles = StyleSheet.create({
  tab: {
    marginTop:20,
  }
})
function HomeMenu(props){
    return(
        <Tab.Navigator   screenOptions={{tabBarShowLabel:false,
            tabBarStyle: {
            backgroundColor: '#13131A', 
            borderTopColor: '#2A2A3D',   
            borderTopWidth: 1,
            height: 64,
    }
        }}>
            <Tab.Screen style = {styles.tab} name='Stack' component={StackMenu} options={
                {    headerShown:false,
                     tabBarIcon: ()=> <Feather  name="home" size={24} color="#F0EEFF" style={styles.tab} />
                }
                }/>
            <Tab.Screen style = {styles.tab} name='NuevoPost' component={NuevoPost} options={
                {    headerShown:false,
                     tabBarIcon: ()=> <Logo/>

                }
                }/>
            <Tab.Screen style = {styles.tab} name='Profile' component={User}options={
                {   headerShown:false,
                    tabBarIcon: ()=> <Feather name="user" size={24} color="#F0EEFF" style={styles.tab} />
                }
                }/>
        </Tab.Navigator>
    )

}
export default HomeMenu;