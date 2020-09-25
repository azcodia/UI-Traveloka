//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const containHeight = 50 / 100 * screenHeight
const containWidth = screenWidth

const pad_container = 0
const itemWidth = 50 / 100 * (containWidth - pad_container)
const itemHeight = 65 / 100 * containHeight
const listMenu = [
    {
        icon: "briefcase-outline",
        nameIcon: "Flights"
    },
    {
        icon: "cloud-download-outline",
        nameIcon: "Hotel"
    }
]

// create a component
class Attention extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    renderMenu() {
        return (
            listMenu.slice(0.2).map((data) => {
                console.log("Loop List Menu", data)
                return (
                    <View style={[styles.carItemStyle, { height: itemHeight, width: itemWidth,  }]}>
                        {/* IMAGE */}
                        <View style={[styles.itemListType2, { justifyContent: 'center', alignItems: 'center'}]}>
                            <Icon name={data.icon} size={160} color='#0d7fcc' />
                        </View>
                        <View style={{ height: 50, width: 200, paddingLeft: 10 }}>
                            <Text style={{ textAlign: 'left', fontWeight: '600', overflow: 'hidden', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Our Method to</Text>
                            <Text style={{ fontWeight: 'bold', textAlign: 'left', fontWeight: '600', overflow: 'hidden', color: 'white', fontSize: 14 }}>Keep Your Account Safe</Text>
                        </View>
                    </View>
                )
            })
        )

    }


    render() {

        return (
            <View style={{ backgroundColor: '#1ba0e2' }}>
                {/* Title */}
                <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 5, paddingVertical: 15, marginBottom: 10 }}>
                    <View style={{ height: 45, width: '80%', marginLeft: 10 }}>
                        <Text style={{ fontWeight: '600', color: 'white', fontWeight: '600', fontSize: 20 }} >Data Protection on Traveloka</Text>
                        <Text style={{ fontWeight: '600', color: 'white', fontSize: 12 }} >Let's maintain your account safety together</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 50 }}>
                    {/*  */}
                    {this.renderMenu()}
                    {/*  */}
                </View>
                <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <Text style={{ color: '#5d5d5d', fontWeight: '600' }}>Come back again later for new inspiring stories!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemListType2: {
        height: 180,
        width: 180,
        // marginLeft: 10,
        borderRadius: 10
    },
});

//make this component available to the app
export default Attention;


