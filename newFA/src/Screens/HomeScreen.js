import { StyleSheet, View, Dimensions} from 'react-native'
import React from 'react'
import Banner from '../Components/Home/Banner';
import HomeProduct from '../Components/Home/HomeProduct';

var { width } = Dimensions.get("window");

export default function HomeScreen() {
    return (
        <View>
            <Banner />
            <HomeProduct />
        </View>
    )
}

const styles = StyleSheet.create({})