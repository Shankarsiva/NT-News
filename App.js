
import React, { Component } from 'react';
import { StatusBar, View,Text ,Share} from 'react-native';
import MainStack from './Src/Navigations/AppNavigator';
import NetInfo from "@react-native-community/netinfo";
import { appThemeColor, commonstyles, Header_text, whitecolor } from './Src/Styles/CommonStyles';
// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      refreshing:false,
      conn_status: false

    }
  }
  componentDidMount() {
    this.netInfoSubscription = NetInfo.addEventListener(
      this.handleConnectionChange,
    );
  }


  componentWillUnmount() {
    this.netInfoSubscription && this.netInfoSubscription()

  }

  //TO CHECK STATUS OF INTERNET
  handleConnectionChange = (state) => {
    // console.log("CONNECTION TYPE", state.type);
    // console.log("CONNECTION STATUS", state.isConnected);
    // console.log("CONNECTION WIFI STATUS", state.isWifiEnabled);
    this.setState({ conn_status: state.isConnected })

  }
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);
  // share function
 share =() =>{
    Share.share({
        message: this.state.data.link
    })
        .then((result) => console.log(result))
        .then((error) => console.log(error))
}
render(){
    return(
      <View style={commonstyles.container}>
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Header_text} />
      
      <MainStack/>
      </View>
    )
    }
}
