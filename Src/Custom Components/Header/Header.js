import React from "react";
import { HeaderStyle } from "./Header.Styles";
import { View, Image, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FastImage from 'react-native-fast-image'
import { Header_text, whitecolor } from "../../Styles/CommonStyles";

export default function Header(props, { navigation }) {
    return (
        <View style={HeaderStyle.viewHeight}>
            <View style={HeaderStyle.buttonView}>
                <TouchableOpacity onPress={() => {
                    props.leftBtnClick()
                }} style={{ zIndex: 999 }}>
                    <FastImage style={HeaderStyle.buttonImg} source={props.isMenu == true ? require('../../Assets/Images/menu.png') : require('../../Assets/Images/menu.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 3.5, justifyContent: 'center', alignItems: 'center' }}>
                {/* <Text style={[HeaderStyle.heading]}>{props.title}</Text> */}
                <FastImage style={[HeaderStyle.heading]} source={props.image} />
            </View>

            {
                props.isNotif != null && props.isNotif === true &&
                <View style={HeaderStyle.buttonView}>
                    <TouchableOpacity onPress={() => { props.NotificationClick() }}
                        style={{ zIndex: 999, alignSelf: "center" }}>
                        <MaterialIcons name="notifications" size={25} color={Header_text} style={{ marginTop: 0}} />
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
}