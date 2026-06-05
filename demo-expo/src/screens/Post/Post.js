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
function Post (props){
    return(
    <View style={styles.container}>
      <Text> Sección para añadir posteos </Text> 
    </View>
    )
}
export default Post;