import { StyleSheet, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, whitecolor } from './CommonStyles';
const screenWidth = Dimensions.get('window').width;

export const ContactStyles = StyleSheet.create({
    
    mainView:{ 
        backgroundColor: whitecolor,
         height: '100%' 
        },
        text1:{color:blackcolor,fontFamily:'Mandali-Regular',fontSize:20,fontWeight:'600'},
        text2:{color:blackcolor,fontFamily:'Mandali-Regular',fontSize:16,fontWeight:'900'},
        title:{fontFamily:'Mandali-Bold',fontSize:20,color:blackcolor,fontWeight:'bold',marginBottom:10,marginTop:10},
        content:{fontFamily:'Mandali-Regular',fontSize:20,color:blackcolor,textAlign: 'justify',marginBottom:20},
        heading: {
            color: blackcolor,
            // width: '90%',
            textAlign: 'center',
            fontFamily: 'Mandali-Regular',
            fontSize: 30,
          
        },
         subView:{  paddingBottom: 120, margin: 10},
         bulleticon:{ top: 6 },
         bullettext:{ color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 18, left: 10 },
         call:{color:appThemeColor,fontFamily:'bold',fontSize:16,fontWeight:'600'},


})