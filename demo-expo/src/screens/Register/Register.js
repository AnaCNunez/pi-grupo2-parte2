import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { auth } from "../../firebase/config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0F',
        paddingHorizontal: 24,
        justifyContent: 'center'
    },
    logo: {
        fontSize: 32,
        fontWeight: '700',
        color: "#7C3AED",
        textAlign: 'center',
        marginBottom: 4
    },
    subtitulo: {
        fontSize: 14,
        color: '#8B8BA0',
        textAlign: 'center',
        marginBottom: 32,
    },
    input: {
        paddingHorizontal: 16,
        backgroundColor: "#13131A",
        paddingVertical: 14,
        color: '#F0EEFF',
        borderWidth: 1,
        borderColor: "#2A2A3D",
        borderStyle: "solid",
        borderRadius: 12,
        marginBottom: 12,
        fontSize: 16
    },
    submit: {
        backgroundColor: "#7C3AED",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 12,
    },
    textoSubmit: {
        color: '#F0EEFF',
        fontSize: 16,
        fontWeight: '700'
    },
    textoLogin: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },
    botonLogin: {
        marginTop: 8,
        alignItems: 'center'
    }
});

function Register(props) {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registrado, setRegister] = useState(false);
    const [registerError, setRegisterError] = useState("");

    function register(email, pass) {
      auth.createUserWithEmailAndPassword(email, pass)
        .then(response => {
          setRegister(true);
          props.navigation.navigate('Login');
        })
        .catch(error => {
          setRegisterError('Fallo en el registro.')
        })
    }

    function onSubmit() {
      if (password.length < 6) {
        setRegisterError('La contraseña debe tener al menos 6 caracteres.');
        return;
      }

      register(email, password);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>CRATE</Text>
            <Text style={styles.subtitulo}>Creá tu cuenta</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                placeholderTextColor="#8B8BA0"
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#8B8BA0"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#8B8BA0"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#8B8BA0"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />

            <Pressable style={styles.submit} onPress={() => onSubmit()}>
                <Text style={styles.textoSubmit}>Registrarme</Text>
            </Pressable>
            <Text>{registerError}</Text>

            <Pressable style={styles.botonLogin} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.textoLogin}>Ya tengo cuenta</Text>
            </Pressable>
        </View>
    );
}

export default Register;
