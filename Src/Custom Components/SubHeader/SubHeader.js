import React from "react";
import { HeaderStyle } from "../Header/Header.Styles";
import { View, Image, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appThemeColor, blackcolor } from "../../Styles/CommonStyles";
export default function SubHeader(props, { navigation }) {
    return (
        <View style={HeaderStyle.subHeaderviewHeight}>
            <View style={{ flex: 0.3 }}>
                <TouchableOpacity onPress={() => {
                    props.leftBtnClick()
                }} style={{ zIndex: 999, flex: 0.8 }}>
                    <MaterialIcons name="arrow-back" size={30} color={blackcolor} style={{  left: 8,zIndex: 999 }} />

                    {/* <Image style={HeaderStyle.subHeaderbuttonImg} source={props.isMenu == true ? require('../../Assets/Images/menu.png') : require('../../Assets/Images/left-arrow.png')} /> */}
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={[HeaderStyle.subHeaderheading]}>{props.title}</Text>
            </View>

            {
                props.isShare != null && props.isShare === true &&
                <View style={{ flex: 0.3 }}>
                    <TouchableOpacity onPress={() => { props.ShareClick() }}
                        style={{ zIndex: 999 }}>
                        <MaterialIcons name="share" size={25} color={appThemeColor} style={{ top: 5, left: 20 }} />
                    </TouchableOpacity>
                </View>
            }
            {
                props.isBook != null && props.isBook === true &&
                <View style={{ flex: 0.3 }}>
                    <TouchableOpacity onPress={() => {
                        props.BookClick()
                    }} style={{ zIndex: 999 }}>
                        <MaterialIcons name="bookmark-outline" size={30} color={appThemeColor} style={{ left: 20, top: 2 }} />
                    </TouchableOpacity>
                </View>
            }


        </View>
    )
}