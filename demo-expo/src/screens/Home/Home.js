import React from "react";
import { Text, View, Pressable} from "react-native";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
    paddingHorizontal: 24,
    justifyContent: 'center',
  }})
function Home(props){
    return(
    <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>

            <FlatList
                data={posteos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Post data={item.data} id={item.id}/>
                }
            />

        </View>

    )
}
export default Home;