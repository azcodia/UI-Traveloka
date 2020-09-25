//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const containHeight = 50 / 100 * screenHeight
const containWidth = screenWidth

const pad_container = 15
const itemWidth = 50 / 100 * (containWidth - pad_container)
const itemHeight = 65 / 100 * containHeight

// ARRAY
const listMenu = [
    {
        icon: "airplane-sharp",
        nameIcon: "Flights"
    },
    {
        icon: "md-business",
        nameIcon: "Hotel"
    },
    {
        icon: "md-bus-sharp",
        nameIcon: "Airport Transfer"
    },
    {
        icon: "train",
        nameIcon: "Train"
    }
]

// create a component
class BigCard extends Component {

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

    renderMenu() {
        return (
            listMenu.slice(0.4).map((data) => {
                console.log("Loop List Menu", data)
                return (
                    <TouchableOpacity onPress={() => {
                        this.showAlert();
                    }}>
                        <View style={[styles.carItemStyle, { height: itemHeight, width: itemWidth, padding: 5 }]}>
                            {/* IMAGE */}
                            <View style={{ height: itemHeight, justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 100, paddingVertical: 5, borderRadius: 5 }}>
                                <Image style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} source={require('../../Image/city.png')} />
                                <View style={{ position: 'absolute', top: 5, left: 5 }}>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Jakarta</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Colorful Capital</Text>
                                </View>
                                <View style={{ position: 'absolute', bottom: 10, left: 5, flexDirection: 'row' }}>
                                    <Icon name='location' size={15} color='#fff' />
                                    <Text style={{ fontSize: 10, color: 'white', fontWeight: '400' }}>Thamrin City</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })
        )

    }

    render() {

        const { showAlert } = this.state;

        return (
            <View
                style={{ flex: 1 }}
            >
                {/* Title */}
                <View style={{ flex: 1, width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 5, paddingVertical: 5, marginBottom: 0 }}>
                    <View style={{ height: 45, width: '80%', marginLeft: 10 }}>
                        <Text style={{ fontWeight: '600', color: 'black', fontWeight: '600', fontSize: 20 }} >Xperience Flexi Sale</Text>
                        <Text style={{ fontWeight: '600', color: 'gray', fontSize: 12 }} >Book tickets for less before Oct 2020, redeem anytime until 31 Jan 2020</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
                    {/*  */}
                    {this.renderMenu()}
                    {/*  */}
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
    carItemStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu: {
        width: '100%',
        height: '100%',
        //backgroundColor: 'darkgrey', 
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default BigCard;


