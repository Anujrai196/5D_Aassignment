
import React from 'react';
import styled from 'styled-components';
import CharScroll from '../component/Charactors';
import Appearance from '../component/Apperance';
const Banner = ({ items }) => {
    return (
        <Container>
            <Potrayed>Occupation</Potrayed>
            <Text2>{items.occupation[0]}</Text2>
            <Text2>{items.occupation[1]}</Text2>
            <Appeared>Appeared in</Appeared>
            <Appearance items={items}/>
            <Charactor>Other Characters</Charactor>
            <CharScroll items={items}/>
        </Container>

    );
}

export default Banner;

const Container = styled.View`
    possition: absolute;
    margin-Top:10px
    flex:1
    padding-Horizontal:30px
`
const Potrayed = styled.Text`
    font-Size:15px
    color: #18CA75;
    
`
const Text2 = styled.Text`
    color:#FFFFFF;
    font-Size:12px
    
`
const Appeared = styled.Text`
    font-Size:15px
    color: #18CA75;
 
    margin-Top: 30px
`
const Charactor = styled.Text`
    color:#FFFFFF;
    padding: 8px;
    font-Size:23px
   
`