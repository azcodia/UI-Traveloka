import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
// COMPONENT
import HomeMenu from '../../Component/menu';
import CardAccount from '../../Component/cardSccount';
import AccessLocation from '../../Component/View/accessLoc';
import BigCarousel from '../../Component/View/bigCarousel';
import CardCarousel from '../../Component/View/cardCarousel';
import CardBadge from '../../Component/View/cardBadge';
import BigCard from '../../Component/View/bigCard';
import Attention from '../../Component/View/attention';

class HomeScreen extends Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <CardAccount/>
                    <HomeMenu/>
                    <AccessLocation/>
                    <BigCarousel/>
                    <CardCarousel/>
                    <BigCard/>
                    <CardBadge/>
                    <BigCard/>
                    <Attention/>
                </ScrollView>
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});


export default HomeScreen