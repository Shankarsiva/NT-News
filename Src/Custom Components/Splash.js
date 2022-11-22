import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import HomeScreen from '../Screens/Home'
import { appThemeColor, commonstyles } from '../Styles/CommonStyles'


export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('BottomTab')// go to Home page
        }, 500)
    }

    render() {
        return (


            <View >

                <FastImage source={require('../Assets/Images/SPLASH-FINAL.png')} 
                style={{width:'100%',height:'100%'}}/>
            </View>
        )
    }
}