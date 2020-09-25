import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
// COMPONENT
import CardSave from '../../Component/View/cardSave';
class SavedScreen extends Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
               <CardSave /> 
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


export default SavedScreen