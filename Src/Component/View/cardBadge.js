//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

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
class CardBadge extends Component {

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

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => {
                this.showAlert();
              }}>
                <View style={styles.itemListType2}>
                    <Image
                        style={{ width: 180, height: 180, borderRadius: 5 }}
                        source={require('../../Image/city1.png')}
                    />
                    <View style={{ position: 'absolute', width: 60, height: 25, justifyContent: 'center', backgroundColor: '#FE797B', borderTopLeftRadius: 5, borderBottomRightRadius: 5 }}>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'white' }}>Kuningan</Text>
                    </View>
                    <View style={{ position: 'absolute', right: 10, top: 10 }}>
                        <Icon name='bookmark-outline' size={25} color='#fff' />
                    </View>
                    <View style={{ position: 'absolute', width: 70, height: 25, justifyContent: 'center', backgroundColor: '#EB7827', borderRadius: 5, bottom: 5, right: 5 }}>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'white' }}>Save 25%</Text>
                    </View>
                </View>
                <View style={{ height: 50, width: 200, marginBottom: 10, marginTop: 10, marginLeft: -5, paddingLeft: 5 }}>
                    <Text style={{ textAlign: 'left', fontWeight: '600', overflow: 'hidden' }}>Klinik Fakhira - Menteng</Text>
                    <Text style={{ textAlign: 'left', fontWeight: '600', overflow: 'hidden', color: 'gray' }}>Rp. 140.000</Text>
                    <Text style={{ textAlign: 'left', fontWeight: '600', overflow: 'hidden', color: '#EB7827' }}>Rp. 105.000</Text>
                </View>
            </TouchableOpacity>
        )
    }


    render() {

        const { showAlert } = this.state;

        return (
            <View style={{ backgroundColor: 'white' }}>
                {/* Title */}
                <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 5, paddingVertical: 15, marginBottom: 10 }}>
                    <View style={{ height: 45, width: '80%', marginLeft: 10 }}>
                        <Text style={{ fontWeight: '600', color: 'black', fontWeight: '600', fontSize: 20 }} >Xperience Flexi Sale</Text>
                        <Text style={{ fontWeight: '600', color: 'gray', fontSize: 12 }} >Book tickets for less before Oct 2020, redeem anytime until 31 Jan 2020</Text>
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
                            paddingHorizontal={10}
                        />
                    </View>
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
    itemListType2: {
        backgroundColor: '#876ed2',
        height: 180,
        width: 180,
        // marginLeft: 10,
        borderRadius: 10
    },
});

//make this component available to the app
export default CardBadge;


