import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, Dimensions, FlatList } from 'react-native';
var { width, height } = Dimensions.get('window');
import { useRoute } from '@react-navigation/native';
import TopBar from '../Topbar';
import { Fonts } from '../component/component';
import { useSelector } from 'react-redux';

function Favourites() {
    const route = useRoute();
    const FevItem = useSelector(state => state.SandhiStore.fevData)
    console.log(FevItem)

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.renderContainer}>
                <View style={styles.imageViewStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: item.img }}
                    />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.imageText} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.imageText1}>{item.nickname}</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/ICONS/HEART_FILLED.png')}

                    />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.contanier}>
            <TopBar title={"Favourites"} route={route.name} />
            <FlatList
                data={(FevItem) || []}
                renderItem={_renderItem}
                keyExtractor={(item) => item.char_id}
                numColumns={2}
                columnWrapperStyle={styles.imageContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default Favourites;
const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: '#000'
    },
    imageStyle: {
        height: height / 3,
        resizeMode: 'contain',
        borderRadius: 5
    },
    imageContainer: {
        marginTop: 20,
        justifyContent: 'space-evenly',
        // paddingHorizontal:20
    },
    imageText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: Fonts.Medium,
    },
    imageText1: {
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: Fonts.Light,
    },
    textView: {
        height: 70,
        marginHorizontal: 18,
        justifyContent: 'center',
    },
    renderContainer: {
        width: width / 2.5,
        height: height / 2.4,
        alignContent: 'flex-start'

    },
    iconStyle: {
        height: 18,
        width: 20,
        position: 'absolute',
        bottom: 33,
        right: 0
    },
});