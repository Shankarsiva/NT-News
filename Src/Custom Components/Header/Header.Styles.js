import { StyleSheet } from "react-native";
import { appThemeColor, blackcolor, graycolor, whitecolor,Header_BG_Color,Header_text } from "../../Styles/CommonStyles";

export const HeaderStyle = StyleSheet.create({
    viewHeight: {
        height: 60,
        width: "100%",
        backgroundColor: Header_text,
        flexDirection: "row",
        padding: 10,
        justifyContent: 'center',
        alignContent: "center",
        // flex:1,
        borderBottomColor:graycolor,
        borderBottomWidth:2
    },
    buttonImg: {
        width: 20,
        height: 20,
        marginLeft: 6,
        marginTop: 1,
    },
    buttonView:{ flex: 0.4,backgroundColor:whitecolor,justifyContent:'center',
    borderRadius:50,height:30 ,top:5},
    heading: {
        width: '70%',
        height: 45,
        // fontFamily:'Mandali-Bold',
        // textAlign:'center',
        // fontSize:33,
        // color:whitecolor,
        // fontWeight:'bold',
        // top:18
    },
    customheading: {
        width: '70%',
        height: 45,
        fontFamily:'Mandali-Bold',
        textAlign:'center',
        fontSize:33,
        color:Header_text,
        // fontWeight:'bold',
        // top:20
    },
    subHeaderviewHeight: {
        height: 65,
        width: "100%",
        backgroundColor: whitecolor,
        flexDirection: "row",
        padding: 10,
        justifyContent: 'center',
        alignContent: "center",
       
    },
    subHeaderbuttonImg: {
        width: 30,
        height: 30,
        // marginLeft: 10,
        marginTop: 5,

    },
    subHeaderheading: {
        color: blackcolor,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'JIMS',
        fontSize: 30,
      
    }


})