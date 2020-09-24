//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const containHeight = 15 / 100 * screenHeight
const contHeightAccount = containHeight * 60 / 100
const containWidth = screenWidth

const contWidthWallet = screenWidth / 3 - 10

// create a component
class CardAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

        return (
            <View
                style={{ height: containHeight, width: containWidth, backgroundColor: '#dedede' }}
            >
                {/* Account */}
                <View style={{ height: contHeightAccount, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, paddingTop: 5 }}>
                    <View style={{ height: 50, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='person-circle-sharp' size={50} color='#0d7fcc' />
                        <Text style={{ fontSize: 14, color: '#434343' }}>Rahmad Iqbal</Text>
                    </View>
                    <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='ios-scan-circle' size={45} color='#0d7fcc' />
                    </View>
                </View>
                {/* Wallet */}
                <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1, alignItems: 'center', }}>
                    <View style={{ width: contWidthWallet, backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', padding: 2, borderRadius: 5, marginHorizontal: 2 }}>
                        <Icon name='server' size={18} color='#0d7fcc' />
                        <Text style={{ fontSize: 12 }}>80 Points</Text>
                        <Icon name='chevron-forward' size={12} color='#0d7fcc' />
                    </View>
                    <View style={{ width: contWidthWallet, backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', padding: 2, borderRadius: 5, marginHorizontal: 2 }}>
                        <Icon name='wallet' size={18} color='#0d7fcc' />
                        <Text style={{ fontSize: 12 }}>Payment</Text>
                        <Icon name='chevron-forward' size={12} color='#0d7fcc' />
                    </View>
                    <View style={{ width: contWidthWallet, backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', padding: 2, borderRadius: 5, marginHorizontal: 2 }}>
                        <Icon name='card-outline' size={18} color='#0d7fcc' />
                        <Text style={{ fontSize: 12 }}>PayLater</Text>
                        <Icon name='chevron-forward' size={12} color='#0d7fcc' />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

//make this component available to the app
export default CardAccount;


