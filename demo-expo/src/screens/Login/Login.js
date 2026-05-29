import { View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

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
});

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <Pressable style={styles.submit} onPress={() => props.navigation.navigate('HomeMenu')}>
        <Text style={styles.textoSubmit}>Entrar a la app</Text>
      </Pressable>

      <Pressable style={styles.secondary} onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.texto2}>Registrate</Text>
      </Pressable>
    </View>
  );
}

export default Login;
