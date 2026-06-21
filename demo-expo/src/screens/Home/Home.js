import React from "react";
import { Text, View, Pressable, FlatList, Image } from "react-native";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { auth, db } from "../../firebase/config";
import Post from "../../components/Post/Post";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0F',
        paddingHorizontal: 24,
        justifyContent: 'center',
    }, subtitulo: {
        fontSize: 30,
        color: '#8B8BA0',
        textAlign: 'center',
        marginBottom: 48,
    }, 
    logo: {
        fontSize: 48,
        fontWeight: '700',
        color: '#7C3AED',
        textAlign: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        width:"fit-content",
        alignSelf:"center"

    },
    image:{
        height:100,
        alignSelf:"center",
        width:200,
        marginTop: 10,
    },
    div:{
        borderBottomColor: '#2A2A3D',
        borderBottomWidth: 2,
        marginBottom: 17
    }
})

function Home(props) {
    const [posteos, setPosteos] = useState([])
    useEffect(() => {

        if (!auth.currentUser) {
            props.navigation.navigate('Login')
            return
        }
        const posts = db.collection('posts').orderBy('createdAt', 'desc').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    setPosteos(posts)
                })
            })


    }, [])
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/crate-logo.svg")} resizeMode="contain" style={styles.image}/>

            <View style={styles.div}></View>
            
            {posteos.length === 0 ? (
                <Text style={styles.emptyText}>No hay posteos aún.</Text>
            ) : (
                <FlatList
                    data={posteos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Post
                            id={item.id}
                            data={item.data}
                            navigation={props.navigation}
                        />
                    )}
                />
            )}
        </View>

    )
}
export default Home;