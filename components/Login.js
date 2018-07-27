/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import Colors from '../assets/colors';

import Brand_logo from '../assets/images/fullrate/brand_logo';

import Number from './LoginNumber';
import SMS from './LoginSMS';
import Next_svg from "../assets/icons/fullrate/next";

type Props = {};
export default class Login extends Component<Props> {

    // constructor
    constructor(props) {
        super(props);
        this.state = {};
    }

    // removing toolbar(android) / xx(IOS)
    static navigationOptions = {
        header: null ,
    };

    state = {
        loggedIn: false
    };

    attempt = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    };

    render() {

        //const myView = true ? <Number /> : <SMS />;

        // const myView = if (true) {
        //     myView = <Number />
        // } else {
        //     myView = <SMS />
        // }

        return (
            <View>

                {/* comment */}
                <View>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor={Colors.primary_dark}
                    />
                </View>

                {/* comment */}
                <View style={styles.Header}>
                    <View style={styles.Header_content}>
                        <Brand_logo/>
                    </View>
                </View>

                {myView}

            </View>
        );
    }
}

//#region StyleSheet
const styles = StyleSheet.create({
    StatusBar: {
        backgroundColor: Colors.primary_dark,
    },
    Header: {
        height: 286, // adobe xd stylespec minus 10, to accompany the height of statusbar
        paddingBottom: 62,
        justifyContent: 'flex-end',
        backgroundColor: Colors.primary,
    },
    Header_content: {
        alignSelf: 'center',
    },
    BtnForward: {
        alignSelf: 'center',
    },
});
//#endregion StyleSheet