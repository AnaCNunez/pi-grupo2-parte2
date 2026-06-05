import React from "react";
import { View, Text, Pressable } from "react-native";
import { db, auth } from "../../firebase/config";
import firebase from "firebase";

function Post(props) {


    return (
        <View>
            <Text>{props.data.email}</Text>
            <Text>{props.data.descripcionPost}</Text>



            <Pressable>
                <Text>Me gusta</Text>
            </Pressable>

        </View>
    );
}

export default Post;