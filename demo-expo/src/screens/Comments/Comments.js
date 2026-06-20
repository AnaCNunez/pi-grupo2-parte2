import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import { db, auth } from "../../firebase/config";
import firebase from "firebase";

function Comments(props) {

    const [comentario, setComentario] = useState("");
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.collection('posts')
            .get()
            .then(docs => {
                docs.forEach(doc => {
                    if (doc.id === props.route.params.id) {
                        setComentarios(doc.data().comentarios ? doc.data().comentarios : []);
                        setLoading(false);
                    }
                })
            })
            .catch(error => console.log(error))
    }, [])

    function enviarComentario() {
        if (comentario === "") {
            return;
        }

        db.collection("posts").doc(props.route.params.id).update({
                comentarios: firebase.firestore.FieldValue.arrayUnion({
                    owner: auth.currentUser.email,
                    texto: comentario,
                })
            })
            .then(() => {
                setComentario("");
                db.collection('posts').get().then(docs => {
                        docs.forEach(doc => {
                            if (doc.id === props.route.params.id) {
                                setComentarios(doc.data().comentarios ? doc.data().comentarios : []);
                            }
                        })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Comentarios</Text>

            <TextInput
                placeholder="Escribi un comentario"
                value={comentario}
                onChangeText={text => setComentario(text)}
                style={styles.input}
                placeholderTextColor="#8B8BA0"
            />

            <Pressable onPress={() => enviarComentario()} style={styles.boton}>
                <Text style={styles.textoBoton}>Enviar comentario</Text>
            </Pressable>

            <Text style={styles.subtitulo}>Comentarios agregados</Text>

            {
                loading ?
                    <Text style={styles.texto}>Cargando comentarios...</Text>
                    :
                    comentarios.length === 0 ?
                        <Text style={styles.texto}>Todavía no hay comentarios.</Text>
                        :
                        <FlatList
                            data={comentarios}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <View style={styles.comentario}>
                                    <Text style={styles.owner}>{item.owner}</Text>
                                    <Text style={styles.textoComentario}>{item.texto}</Text>
                                </View>
                            }
                        />
            }

            <Pressable onPress={() => props.navigation.navigate('Home')} style={styles.botonSecundario}>
                <Text style={styles.textoBoton}>Volver</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0F',
        padding: 20
    },
    titulo: {
        color: '#F0EEFF',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#13131A',
        borderWidth: 1,
        borderColor: '#2A2A3D',
        borderRadius: 12,
        padding: 15,
        color: '#F0EEFF',
        marginBottom: 15
    },
    boton: {
        backgroundColor: '#7C3AED',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20
    },
    subtitulo: {
        color: '#F0EEFF',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    texto: {
        color: '#F0EEFF',
        marginBottom: 15
    },
    comentario: {
        backgroundColor: '#13131A',
        borderWidth: 1,
        borderColor: '#2A2A3D',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10
    },
    owner: {
        color: '#8B8BA0',
        marginBottom: 5
    },
    textoComentario: {
        color: '#F0EEFF'
    },
    botonSecundario: {
        backgroundColor: '#5B21B6',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10
    },
    textoBoton: {
        color: '#FFFFFF',
        fontWeight: '700'
    }
})

export default Comments;