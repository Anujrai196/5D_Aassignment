import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from './component';
const Appearance = ({ items }) => {
    const navigation = useNavigation();
    const _renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.seasion}>
                <Text style={{ color: '#FFFFFF',fontFamily:Fonts.Light }}>Seasion {item}</Text>
            </View>
        );
    };
    return (
        <View>
            <FlatList
                data={(items.appearance) || []}
                renderItem={_renderItem}
                keyExtractor={(item) => item.char_id}
                horizontal
                ItemSeparatorComponent={item => {
                    return <View style={styles.itemSeparator} />;
                }}
            />
        </View>
    );
}

export default Appearance;

const styles = StyleSheet.create({
    seasion: {
        height: 38,
        width: 100,
        backgroundColor: '#242424',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5
    },
    itemSeparator: {
        marginHorizontal: 5
    },
})