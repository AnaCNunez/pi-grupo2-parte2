import React, { use, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { db, auth } from "../../firebase/config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  subtitulo: {
    fontSize: 30,
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
  logo: {
    fontSize: 48,
    fontWeight: '700',
    color: '#7C3AED',
    textAlign: 'center',
  },
  error:{
    color: "white",
    fontSize: 15,
    fontWeight: '700',
    textAlign: "center"
  }
})

function NuevoPost(props) {
  const [descripcionPost, setDescripcionPost] = useState("");
  const [error, setError] = useState("")

  function crearPost() {

    db.collection("posts").add({
      descripcionPost: descripcionPost,
      email: auth.currentUser.email,
      likes: [],
      createdAt: Date.now()
      
    })
      .then(() => {
        setDescripcionPost("");
        props.navigation.navigate("StackMenu")
        console.log("Post creado");
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.logo}>Crate</Text>
    
      <Text style={styles.subtitulo}> Nuevo Post </Text>

      <TextInput
        placeholder="¿Qué estás pensando?"
        value={descripcionPost}
        onChangeText={text => setDescripcionPost(text)}
        style={styles.input}
      />

      <Pressable onPress={()=> {descripcionPost.length == 0? setError("Ups! Parece que no hay nada que publicar.") : crearPost()}} style={styles.submit}>
        <Text style={styles.textoSubmit}>Publicar</Text>
      </Pressable>

  <Text style={styles.error}>{error}</Text>
    </View>
  )
}
export default NuevoPost;