import React, { useState } from "react";
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
  }
})

function NuevoPost(props) {
  const [descripcionPost, setDescripcionPost] = useState("");

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
      <Text style={styles.subtitulo}> Nuevo Post </Text>

      <TextInput
        placeholder="Escribí tu post"
        value={descripcionPost}
        onChangeText={text => setDescripcionPost(text)}
        style={styles.input}
      />

      <Pressable onPress={()=>crearPost()} style={styles.submit}>
        <Text style={styles.textoSubmit}>Publicar</Text>
      </Pressable>

    </View>
  )
}
export default NuevoPost;