import { StyleSheet, Platform } from "react-native";
import { appThemeColor, whitecolor } from "../Styles/CommonStyles";

export const sideMenuStyle = StyleSheet.create({
      
    icon:
        { width: 15, height: 15,},

    text: {
        //  fontFamily: 'JIMS', fontSize: 20,
        // color: appThemeColor, fontWeight: '600', 
        color : appThemeColor,
        fontFamily : 'Mandali-Regular',
        fontSize : 20,
        // fontWeight:'500'
    },
    item:{borderTopColor:whitecolor,borderTopWidth:1,marginVertical:-10,marginBottom:-5},
sectionsText:{ color: whitecolor, paddingLeft: 10, fontFamily: 'Mandali-Bold', fontSize: 22, }
});