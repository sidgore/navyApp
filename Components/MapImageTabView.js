import React from 'react';

import { View, StatusBar, StyleSheet,WebView,Image } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

const FirstRoute = () => (
  <WebView source={{uri: 'http://indiannavy.w20.n3n.io/grid?token=1528155765985:69501&viewId=5b15cedeec2c1cee609b5ccc'}}
            
          />
);
const SecondRoute = () => (

   <Image style={{width: 330, height: 550,alignSelf:'center'}}  source={{uri: 'https://i.ytimg.com/vi/JT6yaLt10DA/maxresdefault.jpg'}}
        />
  
 
);

export default TabNavigator({
    Map: { screen: FirstRoute },
    Image: { screen: SecondRoute },
  });