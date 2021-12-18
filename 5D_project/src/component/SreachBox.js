import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, TextInput, StatusBar } from 'react-native';
var { width } = Dimensions.get('window');
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Fonts } from './component';
function SearchBox() {
    const route = useRoute();
    const [text, setText] = useState('')
    const onChange = (textValue) => setText(textValue);
    return (
        <View style={styles.contanier}>
            <StatusBar barStyle={'dark-content'} backgroundColor="#242424" />
            <TextInput style={styles.InputStyle}
                placeholder={"Search"}
                placeholderTextColor={"#D3D3D3"}
                selectionColor={'#FFFFFF'}
                underlineColorAndroid='transparent'
                inputContainerStyle={{ borderBottomWidth: 0 }}
                onChangeText={onChange}
                value={text}
            />
            <TouchableOpacity
                onPress={() => setText('')}
                style={{ position: 'absolute', right: 20 }}>
                <Icon name='close' size={25} color={"#FFFF"} />
            </TouchableOpacity>
        </View>
    )
}
export default SearchBox;
const styles = StyleSheet.create({
    contanier: {
        // height: 65,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    InputStyle: {
        height: 65,
        width: width,
        backgroundColor: '#242424',
        fontSize: 40,
        fontFamily: Fonts.Thin,
        color: '#FFFFFF',
        paddingLeft: 20,
        borderBottomWidth: 0
    },
});