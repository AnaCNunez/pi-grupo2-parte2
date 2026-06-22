import React, { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { db, auth } from "../../firebase/config";
import { StyleSheet } from "react-native";
import firebase from "firebase";

import Post from "../../components/Post/Post";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  subtitulo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#F0EEFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  seccionPerfil: {
    backgroundColor: '#13131A',
    borderWidth: 1,
    borderColor: '#2A2A3D',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  userName: {
    color: '#F0EEFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  email: {
    color: '#8B8BA0',
    fontSize: 15,
  },
  tituloPosts: {
    color: '#F0EEFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  botonLogout: {
    backgroundColor: '#7C3AED',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  logout: {
    color: '#F0EEFF',
    fontSize: 16,
    fontWeight: '700',
  },
  emptyText: {
    color: '#8B8BA0',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
  }
})

function User(props) {
  const [posteos, setPosteos] = useState([])
  const [userName, setUserName] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    db.collection("posts")
      .where("email", "==", auth.currentUser.email)
      .onSnapshot(docs => {

        let posts = [];

        docs.forEach(doc => {
          posts.push({
            id: doc.id,
            data: doc.data()
          });
        });

        setPosteos(posts);
        setLoading(false)
      });

    db.collection("users")
      .where("email", "==", auth.currentUser.email)
      .onSnapshot(docs => {

        docs.forEach(doc => {
          setUserName(doc.data().userName);
        });

      });

  }, [])



  function LogOut() {
    auth.signOut()
      .then(() => props.navigation.navigate('Login'))

  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Mi Perfil</Text>

      <View style={styles.seccionPerfil}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.email}>{auth.currentUser.email}</Text>
      </View>

      <Text style={styles.tituloPosts}>Mis publicaciones</Text>

      {loading ?
        <View>
          <Text style={styles.emptyText}>
            Cargando publicaciones...
          </Text>
          <ActivityIndicator/>
        </View>
        :
        posteos.length === 0 ?
          (<Text style={styles.emptyText}>
            Todavía no publicaste ningún post.
          </Text>) :
          (<FlatList
            data={posteos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <Post
                id={item.id}
                data={item.data}
                navigation={props.navigation}
              />
            }
          />)}

      <Pressable style={styles.botonLogout} onPress={() => LogOut()}>
        <Text style={styles.logout}>Desloguearse</Text>
      </Pressable>
    </View>
  )
}

export default User;