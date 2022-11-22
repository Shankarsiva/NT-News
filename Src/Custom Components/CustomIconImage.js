import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';

export default CustomIconImage = (props) =>{
    return (
        // <TouchableOpacity onPress={props.onPress ? props.onPress : null}>
        <View style={{width:props.size,height:props.size,alignItems:'center',justifyContent:'center'}}>
            <Image resizeMode='cover' source={props.image} {...props}/>
        </View>
        // </TouchableOpacity>
    );
}