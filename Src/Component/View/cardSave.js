//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

// create a component
class CardSave extends Component {

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
            <View>
                {/* Banner */}
                <View style={{ margin: 10, height: 120, backgroundColor: 'red', borderRadius: 5 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} source={require('../../Image/bannerSave.png')} />
                    <View style={{ position: 'absolute', bottom: 10, left: 15, flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>See All Saved Items</Text>
                        <TouchableOpacity onPress={() => {
                            this.showAlert();
                        }}>
                            <Icon name='arrow-forward' size={20} color='#fff' style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Collection */}
                <View style={{ marginLeft: 10, marginVertical: 20 }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Collections</Text>
                </View>
                <View style={{ height: 140, margin: 10, borderRadius: 5, borderWidth: 0.5, borderColor: '#434343' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 90, justifyContent: 'space-between' }}>
                        <View style={{ width: '35%', height: 90, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='briefcase' size={90} color='#0d7fcc' style={{ paddingLeft: 10 }} />
                        </View>
                        <View style={{ flexDirection: 'column', width: '65%', height: 90 }}>
                            <Text style={{ fontWeight: '600', fontSize: 14, margin: 5 }}>Organize your saved items!</Text>
                            <Text style={{ fontSize: 12, color: 'gray', marginLeft: 5 }}>Create wish lists and holiday plans by organizing your saved items with Collections</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', width: '100%', paddingHorizontal: 5 }}>
                        <View style={{ height: 0.5, backgroundColor: '#434343' }}></View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this.showAlert();
                    }}>

                        <View style={{ height: 50, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', color: '#0d7fcc' }}>Create New Collection</Text>
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

});

//make this component available to the app
export default CardSave;


