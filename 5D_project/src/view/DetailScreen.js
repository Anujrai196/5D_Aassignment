import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import Header from '../component/Header';
import Body from '../component/Body';
import Banner from '../component/Banner';

function DetailScreen(props) {
    const items = props.route.params.item
    console.log(props)
    return (
        <Container>
            <Poster source={{ uri: items.img }}>
                <Gradient
                    locations={[0, 0.2, 0.001, 0.8]}
                    colors={[
                        'rgba(0,0,0,.5)',
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,1)'
                    ]}
                >
                    <Header />
                    <Body items={items} />

                </Gradient>
            </Poster>
            <Banner items={items} />
        </Container>
    )
}
export default DetailScreen;

const Container = styled.ScrollView`
flex: 1;
background-color: #000;

`
const Poster = styled.ImageBackground`
    width: 100%;
    height: 520px;
`
const Gradient = styled(LinearGradient)`
height: 100%
padding-Horizontal: 30px
`