import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../component/component';
import { useSelector } from 'react-redux';
const CharScroll = (items) => {
    const navigation = useNavigation();
    const charData = useSelector(state => state.SandhiStore.charData)
    var shuffledA = charData.sort(() => 0.5 - Math.random())
    var slicedArray = shuffledA.slice(0, 3);

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.renderContainer}>
                <TouchableOpacity style={styles.imageViewStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: item.img }}
                    />
                </TouchableOpacity>
                <View style={styles.textView}>
                    <Text style={styles.imageText} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.imageText1}>{item.nickname}</Text>
                </View>

            </View>
        );
    };
    return (
        <View>

            <FlatList
                data={(slicedArray) || []}
                renderItem={_renderItem}
                keyExtractor={(item) => item.char_id}

                showsVerticalScrollIndicator={false}
                horizontal
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            />
        </View>
    );
}

export default CharScroll;

const styles = StyleSheet.create({
    renderContainer: {
        width: width / 2.5,
        height: height / 2.4,
    },
    textView: {
        height: 70,
        marginHorizontal: 18,
        justifyContent: 'center',
    },
    imageStyle: {
        height: height / 3,
        resizeMode: 'contain',
        borderRadius: 5
    },
    itemSeparatorStyle: { width: 5 },
    // imageContainer: {
    //     // marginTop: 20,
    //     // justifyContent: 'space-evenly',
    // },
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


    iconStyle: {
        height: 18,
        width: 20,
        position: 'absolute',
        bottom: 20,
        right: 0
    },
    itemSeparator: { width: 12 },
})