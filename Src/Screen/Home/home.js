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
                    <CardAccount />
                    <HomeMenu />
                    <AccessLocation/>
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