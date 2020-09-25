import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    BackHandler,
    Alert,
    Linking
} from 'react-native';
import { Router, Scene, Drawer, Actions, Stack, Modal, Tabs } from 'react-native-router-flux';
import CustomIcon from './Src/Component/Icon/tabIcon';
import HomeScreen from './Src/Screen/Home/home';
import SavedScreen from './Src/Screen/Saved/saved';
import BokedScreen from './Src/Screen/Boked/boked';
import InboxScreen from './Src/Screen/Inbox/inbox';
import AccountScreen from './Src/Screen/Account/account';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          // doubleBackToExitPressedOnce: false
        }
      }

    render() {
        return(
            <View style={{flex: 1}}>
                <Router>
                    <Scene
                        initial={true}
                        key="root"
                        titleStyle={{
                          color: '',
                          fontWeight: 'normal'
                        }}
                    >   
                        
                        <Tabs key="maintab" tabs={true} tabBarPosition="bottom" swipeEnabled={false} hideNavBar tabBarStyle={styles.background, styles.setHeight} showLabel={true} lazy={true} >
                            <Scene key={"home"} title="Home" component={HomeScreen} icon={CustomIcon} iconTitle="Home" drawerLockMode={'locked-closed'} iconName="arrow-drop-down" iconTitle="Home" hideNavBar/>
                            <Scene key={"saved"} title="Saved" component={SavedScreen} icon={CustomIcon} drawerLockMode={'locked-closed'} iconTitle="Home" hideNavBar/>
                            <Scene key={"boked"} title="My Booking" component={BokedScreen} icon={CustomIcon} drawerLockMode={'locked-closed'} iconTitle="Home" hideNavBar/>
                            {/* <Scene key={"inbox"} title="My Inbox" component={InboxScreen} icon={CustomIcon} drawerLockMode={'locked-closed'} iconTitle="Home" hideNavBar/> */}
                            <Scene key={"account"} title="My Account" component={AccountScreen} icon={CustomIcon} drawerLockMode={'locked-closed'} iconTitle="Home" hideNavBar/>
                        </Tabs>
                    </Scene>
                </Router>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0f0f0',
    },
    setHeight: {
      height: 50
    }
})
