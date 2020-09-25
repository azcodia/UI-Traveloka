//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const data = [
    {
        image: "mountain.jpg",
    },
    {
        image: "mountain.jpg",
    },
    {
        image: "mountain.jpg",
    },
    {
        image: "mountain.jpg",
    },
]

// create a component
class CardCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={styles.itemListType2}>
                    <Image
                        style={{ width: 180, height: 180, borderRadius: 5 }}
                        source={require('../../Image/cardBanner.png')}
                    />
                </View>
                <View style={{ height: 50, width: 200, marginBottom: 10, marginTop: 10, marginLeft: -5, paddingLeft: 5 }}>
                    <Text style={{ textAlign: 'left', fontWeight: '600', overflow: 'hidden' }}>Klinik Pintar</Text>
                    <Text style={{ textAlign: 'left', fontWeight: '600', overflow: 'hidden', color: '#EB7827' }}>Start from Rp. 150.000</Text>
                </View>
            </TouchableOpacity>
        )
    }


    render() {

        return (
            <View style={{ backgroundColor: 'white' }}>
                {/* Title */}
                <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 5, paddingVertical: 15, marginBottom: 10 }}>
                    <View style={{ height: 30, width: '100%', marginLeft: 10 }}>
                        <Text style={{ fontWeight: '600', color: 'black', fontWeight: '600', fontSize: 20 }} >Import Notice</Text>
                        <Text style={{ fontWeight: '600', color: 'gray', fontSize: 12 }} >Travel information and refund/reschedule guide</Text>
                    </View>
                </View>
                {/* Card */}
                <View>
                    <View style={{ height: 250, width: '100%' }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={data}
                            renderItem={this._renderItem}
                            paddingHorizontal = {10}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemListType2: {
        backgroundColor: '#876ed2', 
        height: 180, 
        width: 180, 
        // marginLeft: 10,
        borderRadius: 10
      },
});

//make this component available to the app
export default CardCarousel;


