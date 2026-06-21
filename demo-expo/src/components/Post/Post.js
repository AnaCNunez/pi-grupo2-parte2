import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { db, auth } from "../../firebase/config";
import firebase from "firebase";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#13131A",
        borderWidth: 1,
        borderColor: "#2A2A3D",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    user: {
        color: "#9D5FF5",
        fontSize: 17,
        fontWeight: "600",
    },
    descripcion: {
        color: "#F0EEFF",
        fontSize: 15,
        marginBottom: 20,
        marginTop: 13,
    },
    seccionLike: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    likes: {
        color: "#F0EEFF",
        fontSize: 15,
        fontWeight: "500",
    },
    botonLike: {
        backgroundColor: "#7C3AED",
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 10
    },
    textoLike: {
        color: "#F0EEFF",
        fontWeight: "700",
    },
    comentario:{
        color: "#F0EEFF",
    },
    corazon:{
        flexDirection:"row",
        alignItems:"center"
    }
});

function Post(props) {
    function darLike() {
        db.collection("posts").doc(props.id).update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
            .then(() => console.log("likeo"))
    }

    function sacarLike() {
        db.collection("posts").doc(props.id).update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
            .then(() => console.log("Like eliminado"))
    }

    return (
        <View style={styles.card}>
            <Text style={styles.user}>{props.data.user}</Text>
            <Text style={styles.descripcion}>{props.data.descripcionPost}</Text>

            <View style={styles.seccionLike}>


                <Pressable style={styles.botonLike} onPress={() => props.data.likes && props.data.likes.includes(auth.currentUser.email) ? sacarLike() : darLike()}>
                       {props.data.likes && props.data.likes.includes(auth.currentUser.email) ? <View style={styles.corazon}><Ionicons name="heart-dislike-outline" size={17} color="white"/><Text style={styles.likes}>{props.data.likes && props.data.likes.length > 0?` x ${props.data.likes.length}`: ""} </Text></View> : <View style={styles.corazon}><Ionicons name="heart-outline" size={17} color="white"/> <Text style={styles.likes}> {props.data.likes && props.data.likes.length > 0?` x ${props.data.likes.length}`: ""}</Text></View> }
                </Pressable>


                <Pressable style={styles.botonLike} onPress={() => props.navigation.navigate('Stack', { screen: 'Comments', params: { id: props.id } })}>  
                    <Text style={styles.comentario}>Comentar</Text>
                </Pressable>
            </View>
            

        </View>
    )
}

export default Post;