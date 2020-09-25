import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

class AccountScreen extends Component {

    constructor() {
        super()
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
            <View style={{ flex: 1, backgroundColor: '#dedede' }}>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 100, backgroundColor: '#0d7fcc', width: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row', position: 'absolute', height: 100, width: '95%', backgroundColor: 'white', top: 15, borderRadius: 5 }}>
                            <Icon name='person-circle-sharp' size={60} color='#0d7fcc' />
                            <View style={{}}>
                                <Text style={{ color: '#434343', fontWeight: '700' }}>Rahmad Iqbal</Text>
                                <Text style={{ color: 'gray' }}>Logged In with Google</Text>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Text style={{ color: '#0d7fcc', fontWeight: '700' }}>VIEW MY PROFILE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* PAYMENT */}
                    <View style={{ marginTop: 35, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 15 }}>My Payment Options</Text>
                        <View style={[styles.card, { borderRadius: 5, marginVertical: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='card-outline' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>PayLater</Text>
                                <Text>Available Limit Rp. 7.000.000</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={[styles.card, { borderTopLeftRadius: 5, borderTopRightRadius: 5, marginTop: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='ios-library-outline' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>Traveloka Pay</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.card, { borderBottomLeftRadius: 5, borderBottomRightRadius: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='ios-logo-bitcoin' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>UANGKU Balance</Text>
                                <Text style={{ fontWeight: '700', fontSize: 12, color: '#87eba4' }}>Activate now to enjoy quick and easy payments 24/7</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* REWARD */}
                    <View style={{ marginTop: 35, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 15 }}>My Rewards</Text>
                        <View style={[styles.card, { borderTopLeftRadius: 5, borderTopRightRadius: 5, marginTop: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='server' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>65 Points</Text>
                                <Text style={{ color: 'gray' }}>Trade points for coupons and learn how to earn more</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.card, { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='md-medal' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>My Coupons</Text>
                                <Text style={{ color: 'gray' }}>View coupons that you can use now</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.card, { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='md-logo-capacitor' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>Special Rewards</Text>
                                <Text style={{ color: 'gray' }}>See available promos that are just for you!</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* BILL */}
                    <View style={{ marginTop: 35, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 15 }}>My Bills</Text>
                        <View style={[styles.card1, { borderRadius: 5, marginVertical: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon1]}>
                                <Icon name='cash-sharp' size={70} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '75%', height: 100, justifyContent: 'center' }}>
                                <Text style={{ color: 'gray' }}>One place to pay and manage all your bills </Text>
                                <Text style={{ color: '#0d7fcc', fontSize: 15, fontWeight: '600' }}>Explore My Bills</Text>
                            </View>
                            <View style={{ width: '0%', height: 100, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                            </View>

                        </View>
                    </View>
                    {/* MEMBER FEATURES */}
                    <View style={{ marginTop: 35, paddingHorizontal: 10, marginBottom: 30 }}>
                        <Text style={{ fontSize: 15 }}>Member Features</Text>
                        <View style={[styles.card, { borderRadius: 5, marginVertical: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='newspaper' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>My Refund</Text>
                                <Text style={{ color: 'gray' }}>Manage your refund in one place</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={[styles.card, { borderTopLeftRadius: 5, borderTopRightRadius: 5, marginTop: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='ios-alert-circle' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>Help Center</Text>
                                <Text style={{ color: 'gray' }}>Manage your refund in one place</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.card, { borderBottomLeftRadius: 5, borderBottomRightRadius: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
                            <View style={[styles.cardIcon]}>
                                <Icon name='ios-settings' size={35} color='#0d7fcc' />
                            </View>
                            <View style={{ width: '70%', height: 60, justifyContent: 'center' }}>
                                <Text>Settings</Text>
                                <Text style={{ color: 'gray' }}>View and set your account preferences</Text>
                            </View>
                            <View style={{ width: '15%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    this.showAlert();
                                }}>
                                    <Icon name='chevron-forward' size={20} color='#0d7fcc' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

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
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    card: {
        height: 60,
        width: '100%',
        borderWidth: 0.1,
        borderColor: '#434343',
        backgroundColor: 'white',
    },
    card1: {
        height: 100,
        width: '100%',
        borderWidth: 0.1,
        borderColor: '#434343',
        backgroundColor: 'white',
    },
    cardIcon: {
        width: '15%',
        height: 60,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardIcon1: {
        width: '25%',
        height: 60,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default AccountScreen