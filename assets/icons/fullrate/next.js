/**
 * (https://www.npmjs.com/package/react-native-svg)
 */
import React, { Component } from 'react';
import Svg,{ Path } from 'react-native-svg';

const fill = "#14143D";

export default class Next_svg extends Component {
    render() {

        return (
            <Svg
                height="100"
                width="100"
				//version="1.1"
				//id="Layer_1_1_"
				//xmlns="http://www.w3.org/2000/svg"
				//xmlns:xlink="http://www.w3.org/1999/xlink"
				//x="0px"
				//y="0px"
				//viewBox="0 0 66 66"
				//style="enable-background:new 0 0 66 66;"
				//xml:space="preserve"
            >

                <Path
                    fill={fill}
                    d="M33,0C14.775,0,0,14.775,0,33s14.775,33,33,33s33-14.775,33-33S51.225,0,33,0z M31.933,45.473v-8.274
						H20.566v-8.433h11.367v-8.24l14.968,12.472L31.933,45.473z"
                />
            </Svg>
        );
    }
}