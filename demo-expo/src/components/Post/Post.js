import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { db, auth } from "../../firebase/config";
import firebase from "firebase";

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#13131A",
        borderWidth: 1,
        borderColor: "#2A2A3D",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    email: {
        color: "#9D5FF5",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8,
    },
    descripcion: {
        color: "#F0EEFF",
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 16,
    },
    seccionLike: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    likes: {
        color: "#BDBDCC",
        fontSize: 15,
        fontWeight: "500",
    },
    botonLike: {
        backgroundColor: "#7C3AED",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    textoLike: {
        color: "#F0EEFF",
        fontWeight: "700",
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
            .then(() => console.log("like eliminado"))
    }

    return (
        <View style={styles.card}>
            <Text style={styles.email}>{props.data.email}</Text>
            <Text style={styles.descripcion}>{props.data.descripcionPost}</Text>
            <Text style={styles.likes}>🤍{props.data.likes ? props.data.likes.length : 0}</Text>

            <View style={styles.seccionLike}>


                <Pressable style={styles.botonLike} onPress={() => props.data.likes && props.data.likes.includes(auth.currentUser.email) ? sacarLike() : darLike()}>
                    {props.data.likes && props.data.likes.includes(auth.currentUser.email) ? <Text>Quitar me gusta</Text> : <Text>Me gusta</Text>}
                </Pressable>

                <Pressable style={styles.botonLike} onPress={() => props.navigation.navigate('Stack', { screen: 'Comment', params: { id: id } })}>  
                    <Text>Comentar</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Post;