import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
const Body = ({ items }) => {
    return (
        <Container>
            <Banner resizeMode='contain' source={{ uri: items.img }} />
            <Text>{items.name}</Text>
            <Text1>{items.nickname}</Text1>
            <Potrayed>Potrayed</Potrayed>
            <Container1>
            <Text2>{items.portrayed}</Text2>
            <Text3>{items.birthday}</Text3>
            <Icon name='gift' size={15} color={"#FFFF"} style={{position:'absolute',right:0}}/>
            </Container1>
           
        </Container>  
    );
}

export default Body;

const Container = styled.View`
    possition: absolute;
    top:120px  
`
const Banner = styled.Image`
    height: 220px;
    width :100%;
    border-radius: 20px
`
const Text = styled.Text`
    color:#FFFFFF;
    padding: 8px;
    font-Size:30px
    text-Align: center;
`
const Text1 = styled.Text`
    color:#FFFFFF;
    padding: 8px;
    font-Size:15px
    text-Align: center;
`
const Potrayed = styled.Text`
    font-Size:15px
    color: #18CA75;  
`
const Container1 = styled.View`
    height :500px
    width:100%
    flex-Direction: row
    justify-Content: space-between

`
const Text2 = styled.Text`
    color:#FFFFFF;
    font-Size:12px
    text-Align: center;
    
`
const Text3 = styled.Text`
    color:#FFFFFF;
    font-Size:12px
    text-Align: center;
   padding-Right:25px
`