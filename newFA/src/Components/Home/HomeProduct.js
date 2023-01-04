import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from 'react'

var {width} = Dimensions.get("window");

export default function HomeProduct(){
    return(
        <View style = {styles.container}>
            <Text
            style={{
                fontSize:25,
                color:"#333",
                textAlign:"center"
            }}
            >Best Selling</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        padding:10,
    },
})