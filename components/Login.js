/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import Colors from '../assets/colors';

import Brand_logo from '../assets/images/fullrate/brand_logo';

import Number from './LoginNumber';
import SMS from './LoginSMS';

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

    // state = {
    //     authenticated: false
    // };
    //
    // attempt = () => {
    //     this.setState({
    //         authenticated: !this.state.authenticated
    //     })
    // };

    render() {

        const submitView = this.state.authenticated ? <SMS /> : <Number />;

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

                {submitView}

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
        height: 200,
        width: 600,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
});
//#endregion StyleSheet