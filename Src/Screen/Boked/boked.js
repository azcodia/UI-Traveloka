import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// COMPONENT
import CardBadge from '../../Component/View/cardBadge';
import CardCarousel from '../../Component/View/cardCarousel';
import BigCarousel from '../../Component/View/bigCarousel';

class BokedScreen extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#dedede' }}>
                <ScrollView>
                    <View style={{ height: 200, alignItems: 'center' }}>
                        <Icon name='ios-sad-outline' size={150} color='#0d7fcc' />
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>No Active E-tickets and Voucher</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400' }}>Find inspiration for you next adventure below !</Text>
                    </View>
                    <CardBadge />
                    <CardCarousel />
                    <BigCarousel/>
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


export default BokedScreen