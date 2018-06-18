
import React, { Component } from 'react';

import { Text, View, StyleSheet, Button, TextInput, Image, TouchableHighlight } from 'react-native';
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { text1: "http://feeder.w20.n3n.io:9998", text2: "abe36e35bd9d713554cc7fe0de6a8c92" };

    }


    render() {
        return (
            <View style={{ flex: 7, alignItems: 'center', backgroundColor: '#0e1425' }}>




           

                    <View style={{ backgroundColor: '#0e1425', alignItems: 'center', margin: 20, borderColor: 'black', padding: 10, borderRadius: 8 }}>
                        <Image source={require('./Resources/layer-3.png')} style={{ width: 200, height: 100 }} resizeMode="contain" />
                    </View>
  





  


                <View style={{ flex: 4, alignItems: 'center', backgroundColor: '#0e1425' }}>




                    <View style={{ flex: 1, alignSelf: 'center', }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 12, fontWeight: '600', color: '#a4a4a4', marginVertical: 15 }}>
                            Enter the site information to log In
          </Text>
                    </View>


                    <View style={{}}>

                        <Text style={{ marginLeft: 30, color: '#ffffff' }}>Feeder IP Address </Text>
                        <View style={{
                            margin: 30,
                            flexDirection: 'row',
                            alignSelf: 'flex-start'
                        }}>

                            <TextInput
                                style={{
                                    height: 36, width: 300, flexGrow: 1, fontSize: 14,
                                    borderWidth: 1,
                                    borderColor: '#48BBEC',
                                    backgroundColor: 'white',

                                    color: 'black',
                                }}

                                placeholder='Feeder IP address'
                                onChangeText={(text1) => this.setState({ text1 })}
                                value={this.state.text1} />
                        </View>

                        <Text style={{ marginLeft: 30, color: '#ffffff' }}>Token Number </Text>
                        <View style={{
                            margin: 30,
                            flexDirection: 'row',
                            alignSelf: 'flex-start'
                        }}>

                            <TextInput
                                style={{
                                    height: 36, width: 300, padding: 4, flexGrow: 1, fontSize: 14,
                                    borderWidth: 1,
                                    borderColor: '#48BBEC',
                                    backgroundColor: 'white',

                                    color: 'black',
                                }}
                                placeholder='token Number'
                                onChangeText={(text2) => this.setState({ text2 })}
                                value={this.state.text2} />
                        </View>




                    </View>


                    <View style={{}}>

                        <TouchableHighlight title="Go to DashBoard" onPress={() => this.props.handleLogin(this.state.text1, this.state.text2)} underlayColor="white" resizeMode="contain">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Go To Dashboard</Text>
                            </View>
                        </TouchableHighlight>
                    </View>



                    <View style={{ flex: 1, backgroundColor: '#212531', alignContent: 'center', alignItems: 'center' }}

                    >

                    </View>







                </View>




            </View >
        );
    }
}

const styles = StyleSheet.create({

    button: {
        height: 60,
        width: 330,
        alignItems: 'center',
        backgroundColor: '#1f96ef',
        borderWidth: 1,
        borderRadius: 9.7,
        resizeMode: 'contain'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    image: {
        width: 217,
        height: 138,
        marginTop: 100
    },
    description: {

        fontSize: 13,
        fontFamily: 'Helvetica',

        textAlign: 'center',
        color: 'red',

    },
    flowRight: {

        margin: 10,
        flexDirection: 'row',
        alignSelf: 'flex-start'

    },
    searchInput: {
        flex: 4,
        height: 36,
        width: 70,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
        // borderRadius: 8,
        color: 'black',

    },
});
