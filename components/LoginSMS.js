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

type Props = {};
export default class LoginSMS extends Component<Props> {

    // constructor
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    state = {
        loggedIn: false
    };

    attempt = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    };

    render() {
        return (
            <View>

                {/* comment */}
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
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
                <Text style={{padding: 25.0, alignSelf: 'center'}}>
                    This is the Login-screen #2 -> LoginSMS.js
                </Text>

            </View>
        );
    }
}

//#region StyleSheet
const styles = StyleSheet.create({
    BtnForward: {
        alignSelf: 'center',
    },
});
//#endregion StyleSheet