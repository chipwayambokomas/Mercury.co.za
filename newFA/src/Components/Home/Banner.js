import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";
import React from "react";
import Swiper from 'react-native-swiper';
import { useState } from 'react';
import { useEffect } from 'react';

var { width } = Dimensions.get("window");

export default function Banner() {
    const [BannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            'https://www.tigmooeats.com/assets/web/img/logo.png',
            'https://www.tigmooeats.com/assets/web/img/delivery2.png',
            'https://www.tigmooeats.com/assets/web/img/food.jpg'
        ]);

        return () => {
            setBannerData([]);
        };

    }, []);


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={4}
                        style={{
                            height: width / 2,
                        }}
                    >
                        {BannerData.map((item) => {
                            return (
                                <Image
                                    key={item}
                                    resizeMode="contain"
                                    source={{ uri: item }}
                                    style={styles.banner}
                                />
                            )
                        })}
                    </Swiper>
                    <View style={{ height: 20 }}></View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },

    swiper: {
        width: width,
        marginTop: '6%',
        alignItems: 'center',
    },

    banner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
    },
})