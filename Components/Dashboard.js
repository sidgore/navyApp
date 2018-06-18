import React, { Component } from 'react';
import {


  View,

  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text






} from 'react-native';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],

    };
  }
  previousLogs = () => {
    var URL = 'https://sid-rest-api.herokuapp.com/getLogs';
    var servicedata = [];
    let data = {
      method: 'POST',

      body: JSON.stringify({
        SiteID: 'abe36e35bd9d713554cc7fe0de6a8c92',
        ObjectName: 'alarm_sensors',
        Begin: '1522107506571',
        End: '1684179081111',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(URL, data)
      .then(response => response.json())
      .then(json => json.Result.alarm_sensors)
      .then(data => {
        Object.keys(data).forEach(function (key) {
          servicedata.push(JSON.stringify(data[key].value));
        });

        this.setState({ myData: servicedata });
      })
      .catch(error => {
        console.error(error);
      }); // promise


  };
  render() {
    return (
      <View style={{ flex: 7, alignItems: 'center', backgroundColor: '#0e1425' }}>

        <View
          style={{  
            flex: .7,
            backgroundColor: '#0e1425',
            alignItems: 'stretch',

            flexDirection: 'row',
          }} >
          <Image
            source={require('./Resources/layer-3.png')}
            style={{ top: 20, height: 40 }}
            resizeMode="contain"

          />






        </View>

        <View style={{ flex: 5, padding: 5 }}>

          <FlatList
            data={this.state.myData}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item }) => (
              <View style={styles.FlatListItemStyle}>


                <Text style={{ width: 100, color: '#ffffff', fontSize: 11, }}>
                  {JSON.parse(item).name}
                </Text>

                {JSON.parse(item).status === 'CRIT'
                  ? <Text style={{ color: 'red', width: 60, alignSelf: 'center', fontSize: 11, }}>
                    {JSON.parse(item).status}ICAL
                    </Text>
                  : <Text style={{ color: 'green', width: 60, alignSelf: 'center', fontSize: 10, }}>
                    {JSON.parse(item).status}
                  </Text>}

                <Text style={{ width: 125, marginLeft: 2, alignSelf: 'center', color: 'white', fontSize: 10, }}>{JSON.parse(item).time}</Text>


              </View>
            )}
            keyExtractor={(item, index) => index}
          />

        </View>

        <View style={{ flex: 1, alignSelf: 'center' }}>

          <TouchableHighlight
            onPress={this.previousLogs}
            underlayColor="white"
            resizeMode="contain">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Previous Logs</Text>
            </View>
          </TouchableHighlight>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 340,
    alignItems: 'center',
    backgroundColor: '#1f96ef',
    borderWidth: 1,
    borderRadius: 9.7,

  },
  buttonText: {
    padding: 20,
    color: 'white',
  },

  FlatListItemStyle: {
    padding: 2,
    width: 330,
    fontSize: 10,
    height: 30,
    fontFamily: 'Arial',
    color: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
});

