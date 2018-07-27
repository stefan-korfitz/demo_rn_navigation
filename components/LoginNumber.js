/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


import Next_svg from '../assets/icons/fullrate/next';
import Colors from "../assets/colors";

type Props = {};
export default class LoginNumber extends Component<Props> {

    // constructor
    constructor(props) {
        super(props);
        this.state = {};
    }

    state = {
        authenticated: false
    };

    attempt = () => {
        this.setState({
            authenticated: !this.state.authenticated
        })
    };

    render() {
        return (
            <View>

                {/* comment */}
                <View style={{padding: 10}}>
                    <TextInput
                        //style={{height: 40}}
                        style={styles.input}
                        placeholder="+45 Hovednummer"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>

                {/* rendering assets->img->next.js */}
                <TouchableOpacity
                    style={styles.BtnForward}
                    activeOpacity = { .7 }
                    onPress={this.attempt}>

                    <Next_svg/>

                </TouchableOpacity>

                {/* comment */}
                <Text style={[{padding: 25.0, alignSelf: 'center'}, {color: (this.state.authenticated ? 'green' : 'red')}]}>
                    This is the Login-screen #1 -> LoginNumber.js
                </Text>

            </View>
        );
    }
}

//#region StyleSheet
const styles = StyleSheet.create({
    input: {
        width: 246,
        height: 46,
        marginTop: 107,
        alignSelf: 'center',
        color: Colors.primary_dark,
        fontSize: 20,
        borderBottomColor: Colors.primary_dark,
        borderBottomWidth: 2
    },
    BtnForward: {
        marginTop: 80,
        alignSelf: 'center',
    },
});
//#endregion StyleSheet