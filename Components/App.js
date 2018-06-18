import React, { Component } from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import Screens from './Screens';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // Version can be specified in package.json

var DeviceInfo = require('react-native-device-info');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogged: 0 };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(one, two) {
    //alert(one,two,three);

    //var URL = one + '/' + two + '/f_mobiledevice';
    var URL = 'https://sid-rest-api.herokuapp.com/connect';

    //alert(URL);
    let data = {
      method: 'POST',

      body: JSON.stringify({
        feederIP: one,
        token: two,
        deviceID: DeviceInfo.getUniqueID(),
        osType: DeviceInfo.getSystemName()

      }),
      headers: {

        'Content-Type': 'application/json',

      }
    }

    fetch(URL, data)
      .then(response => response.json())
      .then(json => {

        alert(json);

        if (json == 'Authenticated') {


          this.setState({ isLogged: 1 })
          //this.setState((prevState)=>{isLogged:prevState.isLogged+1});
        }
        // alert(this.state.isLogged);
        //alert(response);
      })
      .catch((error) => {
        console.error(error);
      });

    //this.setState({isLogged:false});

  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#212531' }}>



        {this.state.isLogged == 1 ? <HomeScreen handleLogin={this.handleLogin} /> : <Screens />}



      </View>

    );
  }
}

