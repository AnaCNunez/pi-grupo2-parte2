import React, { useState } from "react";
import {  Image } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        height:60,
        alignSelf:"center",
        width:60,
        marginTop: 20,
    }
})

function Logo(){
    return(
       <Image source={require("../../../assets/icon-monocromo.png")} resizeMode="contain" style={styles.image}/>
    )
}

export default Logo