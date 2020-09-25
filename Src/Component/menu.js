//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const containHeight = 30 / 100 * screenHeight
const containWidth = screenWidth

const pad_container = 20
const itemWidth = 20 / 100 * (containWidth - pad_container)
const itemHeight = 35 / 100 * containHeight

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
  },
  {
    icon: "md-bus",
    nameIcon: "Buses & Shuttle"
  },
  {
    icon: "md-car-sharp",
    nameIcon: "Car Rental"
  },
  {
    icon: "ios-restaurant-sharp",
    nameIcon: "Eats"
  },
  {
    icon: "card",
    nameIcon: "My Cards"
  },
  {
    icon: "card-outline",
    nameIcon: "Paylater Card"
  },
]

// create a component
class HomeMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false
    }
  }

  componentDidMount() {
    console.log("ICON", listMenu[2])
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
      listMenu.slice(0.9).map((data) => {
        console.log("Loop List Menu", data)
        return (
          <TouchableOpacity onPress={() => {
            this.showAlert();
          }}>
            <View style={[styles.carItemStyle, { height: itemHeight, width: itemWidth }]}>
              {/* IMAGE */}
              <View style={{ height: itemHeight * (70 / 100), justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 100 }}>
                <Icon name={data.icon} size={25} color='#0d7fcc' />
              </View>
              {/* TEXT */}
              <View style={[{ height: itemHeight * (30 / 100), justifyContent: 'center', }]}>
                <Text style={[styles.carItemTxtStyle, { color: '#434343', fontSize: 12, lineHeight: 13, textAlign: 'center' }]}>{data.nameIcon}</Text>
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
        style={{ height: containHeight, width: containWidth }}
      >
        <View style={{ justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
          {/*  */}
          {this.renderMenu()}
          <View style={[styles.carItemStyle, { height: itemHeight, width: itemWidth }]}>
            <TouchableOpacity onPress={() => {
              this.showAlert();
            }} style={styles.menu} >
              <View style={{ height: itemHeight * (70 / 100), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {/* <Image style={[styles.carItemImgStyleGray]} source={require('../images/icon/menu.png')} /> */}
                <Icon name='ios-grid-sharp' size={25} color='#ff1e1e' />
              </View>
              <View style={[{ height: itemHeight * (30 / 100), justifyContent: 'center' }]}>
                <Text style={[styles.carItemTxtStyle, { color: '#434343', fontSize: 12 }]}>More</Text>
              </View>
            </TouchableOpacity>
          </View>
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
export default HomeMenu;


