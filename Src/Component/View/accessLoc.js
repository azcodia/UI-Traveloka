//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const screenWidth2 = screenWidth / 2
const screenHeight2 = screenHeight * 20 / 100
const containHeight = 30 / 100 * screenHeight
const containWidth = screenWidth

const contWidthWallet = screenWidth / 3 - 10

// create a component
class AccessLocation extends Component {

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
                style={{ height: containHeight, width: containWidth, backgroundColor: 'rgb(135,206,250)', justifyContent: 'center' }}
            >
                {/*  */}
                <View style={{ width: screenWidth, flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: screenWidth2, flex: 1, height: screenHeight2, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, paddingTop: 20 }}>
                        <Text style={{ fontSize: 15, textAlign: 'justify', flexWrap: 'wrap', color: 'white' }}>
                            Get access to Traveloka's complete features by choosing to enable location all the time!
                        </Text>
                    </View>
                    <View style={{ width: screenWidth2, flex: 1, height: screenHeight2, paddingTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ resizeMode: 'cover', width: 120, height: 120, }} source={require('../../Image/disconnected.png')} />
                    </View>
                </View>
                {/*  */}
                <View style={{ justifyContent: 'space-around', alignItems: 'flex-start', flexDirection: 'row', paddingVertical: 10 }}>
                    <TouchableOpacity onPress={() => {
                        this.showAlert();
                    }}>
                        <View style={{ justifyContent: 'center', borderWidth: 0.5, borderColor: '#434343', width: 160, height: 40, borderRadius: 5, }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Learn More</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.showAlert();
                    }}>
                        <View style={{ justifyContent: 'center', width: 160, height: 40, borderRadius: 5, backgroundColor: '#0d7fcc' }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Enable Location</Text>
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

//make this component available to the app
export default AccessLocation;


