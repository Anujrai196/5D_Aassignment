import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList, View, Text, Dimensions, } from 'react-native';
var { width, height } = Dimensions.get('window');
import { useRoute, useNavigation } from '@react-navigation/native';
import TopBar from '../Topbar';
import { useDispatch, useSelector } from 'react-redux';
import { Fonts } from '../component/component';
import { FavrestData, CharactorsData } from '../actions/actionCreator';

function HomePage() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState('')
  const [liked, setLiked] = useState([])
  // var select = [];
  useEffect(() => {
    getCharactorsFromApi();
    // console.log(select)
  }, [])

  const getCharactorsFromApi = async () => {
    try {
      const response = await fetch(
        'https://www.breakingbadapi.com/api/characters'
      );
      const json = await response.json();
      let data = json
      setData(data)
      dispatch(CharactorsData(data));
    } catch (error) {
      console.error(error);
    }
  };
  const onClickFavourites = (item) => {
    if (item != null) {
      var newArr = []
      // setLiked(item.char_id);
      var select = newArr.push(item.char_id)
      setLiked(select);
      let arr = item
      dispatch(FavrestData(arr))
    }

  }
  
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.renderContainer}>
        <TouchableOpacity style={styles.imageViewStyle}
          onPress={() => navigation.navigate('DetailScreen', { item })}
        >
          <Image
            style={styles.imageStyle}
            source={{ uri: item.img }}
          />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.imageText} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.imageText1}>{item.nickname}</Text>
        </View>
        <TouchableOpacity onPress={() => onClickFavourites(item)}>
          <Image
            style={styles.iconStyle}
            source={(liked == item.char_id) ? require('../../assets/ICONS/HEART_FILLED.png') : require('../../assets/ICONS/HEART.png')}

          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.contanier}>
      <TopBar title={"The Breaking bad"} route={route.name} />
      <FlatList
        data={(data) || []}
        renderItem={_renderItem}
        keyExtractor={(item) => item.char_id}
        numColumns={2}
        columnWrapperStyle={styles.imageContainer}
        showsVerticalScrollIndicator={false}
      />


    </View>
  )
}
export default HomePage;
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
  },
  iconStyle: {
    height: 18,
    width: 20,
    position: 'absolute',
    bottom: 33,
    right: 0
  },
});