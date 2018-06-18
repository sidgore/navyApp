/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';




const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.5922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


import {
    Platform,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    View
} from 'react-native';
import { WebView } from 'react-native';




export default class MapDetail extends Component {

    static navigationOptions = {
        title: 'Map Detail',
      };
    

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },

        };
    }


    render() {

        //alert(JSON.stringify(latitude));
        // const longitide = navigation.getParam('longitide', 77);
        return (
            <WebView
            source={{uri: 'http://indiannavy.w20.n3n.io/grid?token=1528155765985:69501&viewId=5b15cedeec2c1cee609b5ccc'}}
            
          />
        );
    }
}


const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    scrollview: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    map: {
        width: 330,
        height: 400,
    },
});