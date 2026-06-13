import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/config";

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
    texto2: {
        color: '#9D5FF5',
        fontSize: 16,
        fontWeight: '500',
    },
    secondary: {
        backgroundColor: '#13131A',
        borderWidth: 1,
        borderColor: '#2A2A3D',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 12,
  },
    error: {
        fontSize: 14,
        fontWeight: 700,
        color: "#e71919ff",
        textAlign: "center"
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
                db.collection('users').add({
                    email: email,
                    userName: usuario,
                    createdAt: Date.now(),
                })

            })
            .catch(error => {
                setRegisterError('Fallo en el registro.')
            })
    }

    useEffect(
        () => {
            auth.onAuthStateChanged(
                user => {
                    if (user) {
                        props.navigation.navigate('HomeMenu');
                    }
                }
            )
        }, []
    )

    function onSubmit() {
        if (!email.includes('@')) {
            setRegisterError('Email mal formateado');
            return;
        }
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
                placeholderTextColor="#F0EEFF"
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#F0EEFF"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#F0EEFF"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#F0EEFF"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />
            <Text style={styles.error}>{registerError}</Text>
            <Text>{registerError}</Text>
            <Pressable style={styles.submit} onPress={() => onSubmit()}>
                <Text style={styles.textoSubmit}>Registrarme</Text>
            </Pressable>

            <Pressable style={styles.secondary} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.texto2}>Ya tengo cuenta</Text>
            </Pressable>
        </View>
    );
}

export default Register;
