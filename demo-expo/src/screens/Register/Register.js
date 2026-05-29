import { View,Text, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
            container:{
                textAlign: 'center',
                flex:1,
                backgroundColor: '#0a0a0F',
                paddingHorizontal: 24,
                justifyContent: 'center'
            },
            logo:{
                fontSize: 32,
                fontWeight: '700',
                color: "#7C3AED",
                textAlign: 'center',
                marginBottom: 4
            },
            subtitulo:{
                fontSize: 14,
                color: '#8B8BA0',
                textAlign: 'center',
                marginBottom: 48, 
            }
            ,
            text:{
                padding: 4,
                marginBottom: 20,
                borderRadius: 4,
                fontSize: 28,
                fontFamily: 'Sans-serif',
                fontWeight: 'bold'
            },
            input: {
                paddingHorizontal: 16,
                backgroundColor: "#13131A",
                paddingVertical: 14,
                color: '#F0EEFF',
                borderWidth: 1,
                borderColor: "#2A2A3D",
                borderStyle: "solid",
                borderRadius:12,
                marginBottom: 12,
                fontSize: 16

            },
            submit:{
                backgroundColor: "#7C3AED",
                borderRadius: 12,
                paddingVertical: 14,
                alignItems: 'center',
                marginBottom: 12,

            },
            textoSubmit: {
                color: '#F0EEFF',
                fontSize: 16,
                fontWeight: '700'
            },
            texto2: {
                color: '#FFF',
                fontSize: 16,
                fontWeight: '700'
            }


        })

 

function Register(props){
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [user,setUser] = useState("")
function onSubmit(){
    
        console.log("El email es: " + email + " " + password + " " + user)

}
return(

        <View style = {styles.container}>
                <Text style={styles.logo}>
                    CRATE - REGISTRO
                </Text>
            <Pressable style={styles.submit} onPress={()=> props.navigation.navigate('Login')}>
                <Text style={styles.texto2}>Ir a login</Text>
            </Pressable>
        </View>
    )
}

export default Register;
