import { View,Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function User(props){
return(
        <View>
            <Text>
             Perfil
            </Text>
            <Pressable onPress={()=> props.navigation.navigate('Login')}>
                Desloguearse
            </Pressable>
        </View>
    )
}

export default User;