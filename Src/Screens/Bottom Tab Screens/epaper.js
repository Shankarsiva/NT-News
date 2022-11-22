import React, { Component } from "react";
import { Text, View } from "react-native";
import Header from "../../Custom Components/Header/Header";
import { commonstyles } from "../../Styles/CommonStyles";


export default class Epaper extends Component {
    render() {

        return (
            <View styles={commonstyles.container}>
                <Header  image={require('../../Assets/Images/logo.png')}
 isMenu={true} leftBtnClick={() => this.props.navigation.openDrawer()} />
<Text>Epaper screen</Text>
            </View>
        )
    }
}