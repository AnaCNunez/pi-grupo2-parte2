import React, { useState, useEffect } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { db, auth } from "../../firebase/config";
import { StyleSheet } from "react-native";
import firebase from "firebase";

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
    }

})

function Comment(props) {
    const [comentario, setComentario] = useState("")


    function onSubmit() {

        db.collection("posts").doc(props.route.paramps.id).update({
            comentarios: firebase.firestore.FieldValue.arrayUnion({
                email: auth.currentUser.email,
                texto: comentario
            })
        })
            .then(() => setComentario(""))
            .catch((error) => console.log(error)
            )
    }

    useEffect(
        () => {
            db.collection("comments").onSnapshot(
                docs => {

                }, []
            )

        }
    )


    return (
        <View style={styles.container}>


        </View>
    )
}
export default Comment;