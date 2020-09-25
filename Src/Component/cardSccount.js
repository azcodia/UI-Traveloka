//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

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
            showAlert: false
        }
    }

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };
    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    render() {

        const { showAlert } = this.state;

        return (
            <View
                style={{ height: containHeight, width: containWidth, backgroundColor: '#dedede' }}
            >
                {/* Account */}
                <View style={[styles.cardAccount, { height: contHeightAccount }]}>
                    <View style={[styles.cardAccountProfile]}>
                        <Icon name='person-circle-sharp' size={50} color='#0d7fcc' />
                        <Text style={{ fontSize: 14, color: '#434343' }}>Rahmad Iqbal</Text>
                    </View>
                    <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            this.showAlert();
                        }} >
                            <Icon name='ios-scan-circle' size={45} color='#0d7fcc' />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Wallet */}
                <View style={[styles.cardWallet]}>
                    <TouchableOpacity onPress={() => {
                        this.showAlert();
                    }} >
                        <View style={[styles.cardWalletBox, { width: contWidthWallet }]}>
                            <Icon name='server' size={18} color='#0d7fcc' />
                            <Text style={{ fontSize: 12 }}>80 Points</Text>
                            <Icon name='chevron-forward' size={12} color='#0d7fcc' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.showAlert();
                    }} >
                    <View style={[styles.cardWalletBox, { width: contWidthWallet }]}>
                        <Icon name='wallet' size={18} color='#0d7fcc' />
                        <Text style={{ fontSize: 12 }}>Payment</Text>
                        <Icon name='chevron-forward' size={12} color='#0d7fcc' />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.showAlert();
                    }} >
                    <View style={[styles.cardWalletBox, { width: contWidthWallet }]}>
                        <Icon name='card-outline' size={18} color='#0d7fcc' />
                        <Text style={{ fontSize: 12 }}>PayLater</Text>
                        <Icon name='chevron-forward' size={12} color='#0d7fcc' />
                    </View>
                    </TouchableOpacity>
                </View>

                {/* ALERT */}
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Attentioan!"
                    message="Coming Soon"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Got that"
                    confirmButtonColor="#ff1e1e"
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardAccount: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    cardAccountProfile: {
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardWallet: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    cardWalletBox: {
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 2,
        borderRadius: 5,
        marginHorizontal: 2
    }
});

//make this component available to the app
export default CardAccount;


