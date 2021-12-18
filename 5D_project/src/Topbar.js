import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from './component/component'
import Icon from 'react-native-vector-icons/AntDesign';
const TopBar = ({ title, route }) => {
    const navigation = useNavigation();
    return (

        <View style={styles.topbar}>
            <View style={[styles.topbar, { alignItems: 'center', backgroundColor: '#000' }]}>
                {/* {route === "DetailScreen" ? <TouchableOpacity
                    // onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 10 }}>
                    <Icon name='arrow-left' size={30} color={'#FFFFFF'}/>
                </TouchableOpacity> : null} */}


                <View style={styles.titleViewStyle}>
                    <Text style={[styles.titleStyle, { paddingLeft: 20 }]}>{title}</Text>
                </View>


                {route === "HomePage" ? <TouchableOpacity
                    onPress={() => navigation.navigate('Search')}
                    style={{ paddingRight: 10 }}>
                    <Image
                        style={[styles.iconStyle, { tintColor: '#FFFFFF' }]}
                        source={require('../assets/ICONS/search.png')}
                    />
                </TouchableOpacity> : null}

                {route === "HomePage" ? <TouchableOpacity
                   onPress={() => navigation.navigate('Favourites')}
                    style={{ paddingRight: 15 }}>
                    <Image
                        style={styles.iconStyle}
                        source={require('../assets/ICONS/HEART_FILLED.png')}
                    />
                </TouchableOpacity> : null}
                {route === "Favourites" ? <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingRight: 15 }}>
                     <Icon name='close' size={25} color={"#FFFF"} />
                </TouchableOpacity> : null}

            </View>
        </View>
    );
}


export default TopBar;

const styles = StyleSheet.create({
    topbar: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        zIndex: 1
    },
    titleStyle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: Fonts.Bold

    },
    iconStyle: {
        height: 25,
        width: 25,
        alignSelf: 'center',
        resizeMode: 'contain',
        paddingRight: 10
    },
    titleViewStyle: {
        flexGrow: 1
    },
    iconStyle1: {
        height: 25,
        width: 27,
        alignSelf: 'center',
        resizeMode: 'contain',
    }

})