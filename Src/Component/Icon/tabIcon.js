import React, { Component } from 'react';

import { View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomIcon(props) {
    if(props.navigation.state.key === 'home') {
        IconSource = 'home'
    }else if(props.navigation.state.key === 'saved') {
        IconSource = 'save'
    }else if(props.navigation.state.key === 'boked') {
        IconSource = 'book'
    }else if(props.navigation.state.key === 'inbox') {
        IconSource = 'albums'
    }else if(props.navigation.state.key === 'account') {
        IconSource = 'person'
    }

    return (
        <Icon name={IconSource} size={ props.focused == true ? 21 : 20 } color={ props.focused == true ? '#0d7fcc' : '#434343' } />
    );
  }