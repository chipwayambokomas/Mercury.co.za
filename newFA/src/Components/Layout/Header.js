import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

var { width } = Dimensions.get("window");

const Header = () => {
    return (

        <View style={styles.HeaderMain}>
            <View style={styles.HeaderFlex}>
                <TouchableOpacity>
                    <Icon name="menu-outline" size={40} />
                </TouchableOpacity>
                <TextInput placeholder = "Search items here..." 
                placeholderTextColors="#333" 
                style={styles.searchBox}/>
                <TouchableOpacity>
                    <Icon name="search-outline" size={25} style={styles.searchIcon} />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    HeaderMain: {
        width: width,
        height: width / 4 - 20,
        backgroundColor: "#fff",
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
    
    },

    HeaderFlex:{
        flexDirection: "row",
        alignItems: "center",
        
    },

    searchBox:{
        width:width -80,
        height: width/7-15,
        backgroundColor:"#e5e5e5",
        marginHorizontal:10,
        borderRadius:15,
        fontSize:15,
        paddingHorizontal:10,
        position:"relative",
    },

    searchIcon:{
        position:"absolute",
        bottom:-14,
        right:15,
    },
})