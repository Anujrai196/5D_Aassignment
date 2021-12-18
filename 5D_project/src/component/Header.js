import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='arrow-left' size={30} color={'#FFFFFF'} style={{ paddingLeft: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/ICONS/HEART_FILLED.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    iconStyle: {
        height: 22,
        width: 24,
        marginTop: 5,
        marginEnd: 10

    },
})