//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const widthAnnouncement = screenWidth - 20
const widthIconAnnouncement = widthAnnouncement * 10 / 100
const widthAnouncementTitle = widthAnnouncement - (widthIconAnnouncement * 2)

const slideWidth = Math.round((85 * screenWidth) / 100)
const itemHorizontalMargin = Math.round((2 * screenWidth) / 100)
// const itemWidth = slideWidth + itemHorizontalMargin * 2;
const sliderWidth = screenWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const SLIDER_1_FIRST_ITEM = 0;

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
class BigCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        }

    }

    _renderItem = ({ item, index }) => {
        console.log("Image", item)
        return (
            <View style={{ height: '100%', width: 300, borderRadius: 10 }}>
                <View style={{ height: 180, }}>
                    <Image
                        style={{ width: '100%', height: '100%', borderRadius: 10, resizeMode: 'cover' }}
                        source={require('../../Image/mountain.png')}
                    />
                </View>
                <View style={{ height: 80, paddingHorizontal: 3, paddingTop: 5 }}>
                    <Text style={{ fontWeight: '600', color: 'black', fontWeight: '600', fontSize: 14 }} >The Latest From Traveloka</Text>
                    <Text style={{ fontWeight: '600', color: 'gray', fontSize: 12 }} >Stay Informated of the latest feature updates</Text>
                </View>
            </View>
        );
    }

    render() {

        return (
            <View style={{ backgroundColor: 'white' }}>
                {/* Title */}
                <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 5, paddingVertical: 15, paddingTop: 20, marginBottom: 10 }}>
                    <View style={{ height: 30, width: '100%', marginLeft: 10 }}>
                        <Text style={{ fontWeight: '600', color: 'black', fontWeight: '600', fontSize: 20 }} >The Latest From Traveloka</Text>
                        <Text style={{ fontWeight: '600', color: 'gray', fontSize: 12 }} >Stay Informated of the latest feature updates</Text>
                    </View>
                </View>
                {/* Carousel */}
                <View style={{ height: 250, padding: 10, width: '100%', paddingRight: 10, flex: 1,  }}>
                    <Carousel
                        ref={c => this._slider1Ref = c}
                        layout={"default"}
                        //ref={(c) => { this._carousel = c; }}
                        data={data}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        firstItem={SLIDER_1_FIRST_ITEM}
                        inactiveSlideScale={0.95}
                        inactiveSlideOpacity={1}
                        enableMomentum={true}
                        activeSlideAlignment={'start'}
                        containerCustomStyle={{ margin: 5, overflow: 'visible', }}
                        contentContainerCustomStyle={{ paddingVertical: 0 }}
                        autoplay={true}
                        loop={true}
                        // enableSnap={true}
                        lockScrollWhileSnapping={true}
                        autoplayDelay={500}
                        autoplayInterval={5000}
                        activeAnimationType={'spring'}
                        activeAnimationOptions={{
                            friction: 4,
                            tension: 50
                        }}
                        onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

//make this component available to the app
export default BigCarousel;


