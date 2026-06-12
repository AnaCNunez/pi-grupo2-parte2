import React from "react";
import { Text, View, Pressable, FlatList} from "react-native";
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
  }})
function Home(props){
  const [posteos, setPosteos] = useState([])
  useEffect(() => {
        
        if (!auth.currentUser) {
            props.navigation.navigate('Login')
            return
        }
        const posts = db.collection('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                setPosteos(snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })

        return () => posts()
    }, [])
    return(
    <View style={styles.container}>
          {posteos.length === 0 ? (
                <Text style={styles.emptyText}>No hay posteos aún.</Text>
            ) : (
                <FlatList
                    data={posteos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Post
                            id={item.id}
                            data={item}
                            navigation={props.navigation}
                        />
                    )}
                />
            )}
        </View>

    )
}
export default Home;