import { View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { auth } from "../../firebase/config";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: '700',
    color: '#7C3AED',
    textAlign: 'center',
    marginBottom: 4
  },
  subtitulo: {
    fontSize: 14,
    color: '#8B8BA0',
    textAlign: 'center',
    marginBottom: 48,
  },
  input: {
    backgroundColor: '#13131A',
    borderWidth: 1,
    borderColor: '#2A2A3D',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#F0EEFF',
    fontSize: 16,
    marginBottom: 12,
  },
  submit: {
    backgroundColor: '#7C3AED',
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
  secondary: {
    backgroundColor: '#13131A',
    borderWidth: 1,
    borderColor: '#2A2A3D',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  texto2: {
    color: '#9D5FF5',
    fontSize: 16,
    fontWeight: '500',
  },
  error:{
    fontSize: 14,
    fontWeight: 700,
    color: "#e71919ff",
    textAlign: "center",
    marginBottom: 20
  }
});



function Login(props) {

  useEffect(()=>{auth.onAuthStateChanged(user=>console.log(user))},[])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logueado, setLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  function login() {
    auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        setLogin(true);
        props.navigation.navigate('HomeMenu');
      })
      .catch(error => {
        if (email == "" || password == ""){ setLoginError("Completá todos los campos.") ; return; }
          if (password.length < 6) { setLoginError("La contraseña debe tener un mínimo de 6 caracteres."); return}
          if (!email.includes("@")) {setLoginError("El email no es válido, por favor no olvides utilizar @."); return}
        setLoginError('Fallo en el login.')
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Crate</Text>
      <Text style={styles.subtitulo}>Bienvenido de nuevo</Text>

      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <Text style = {styles.error}>{loginError}</Text>

      <Pressable style={styles.submit} onPress={() => login()}>
        <Text style={styles.textoSubmit}>Entrar a la app</Text>
      </Pressable>
      <Text>{loginError}</Text>

      <Pressable style={styles.secondary} onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.texto2}>Registrate</Text>
      </Pressable>
    </View>
  );
}

export default Login;
