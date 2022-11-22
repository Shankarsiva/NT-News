import React, { Component } from "react";
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView, SafeAreaView, Share } from "react-native";
import Header from "../../Custom Components/Header/Header";
import SubHeader from "../../Custom Components/SubHeader/SubHeader";
import { appThemeColor, commonstyles } from "../../Styles/CommonStyles";
import { BaseUrl, LatestUrl, ShareUrl } from "../../Utilities/Api/Urls";
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import { HeaderStyle } from "../../Custom Components/Header/Header.Styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default class LatestNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OnlyLatest: [],
            isLoading: false
        }
    };
    componentDidMount() {

        //    Api integration for  Latest News
        fetch(BaseUrl + LatestUrl)
            .then((response) => response.json())

            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))

                this.setState({ LatestData: responseJson, isLoading: true }, () => {
                    // console.log("LatestDataList data===========" + JSON.stringify(this.state.LatestData))                    
                    var onlyStandard = this.state.LatestData.data.filter((obj) => {
                        return (obj.format == 'standard')
                    })
                    this.setState({ OnlyLatest: onlyStandard, }, () => {
                        // console.log("LatestDataList data===========" + JSON.stringify(this.state.OnlyLatest))                    

                    })
                });
            })
            .catch((error) => {
                console.error(error);
            });


    }
    // share function
    sharecall() {
        const Link_Url = ShareUrl + LatestUrl

        Share.share({
            message: Link_Url
        })
            .then((result) => console.log(result))
            .then((error) => console.log(error))
    }
    render() {
        let decode = require('html-entities-decoder')

        return (
            <SafeAreaView styles={commonstyles.container}>
                <View style={[HeaderStyle.viewHeight]}>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity>
                            <Image source={require('../../Assets/Images/menu.png')} style={HeaderStyle.buttonImg} />
                        </TouchableOpacity >
                    </View>
                    <View style={{ flex: 3.5, justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Text style={[HeaderStyle.customheading]}>{'నమస్తే తెలంగాణ'}</Text> */}
                        <Image style={[HeaderStyle.heading]} source={require('../../Assets/Images/logo.png')} />
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <MaterialIcons name="notifications" size={30} color="#000" style={{ marginTop: 10 }} />
                    </View>
                </View>
                {/* <Header  image={require('../../Assets/Images/logo.png')}
 isMenu={true} isNotif={true}
                    leftBtnClick={() => this.props.navigation.openDrawer()} /> */}
                <SubHeader title={"తాజావార్తలు "} isMenu={false} isBook={false} isShare={true}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    ShareClick={() => { this.sharecall() }}
                    BookClick={() => { alert("BookMark   Clicked") }}
                />
                {/* <ScrollView> */}
                <View>
                    {

                        this.state.OnlyLatest.length != 0 && { isLoading: true } ?
                            <View style={{ position: 'relative' }}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    persistentScrollbar={false}
                                    data={this.state.OnlyLatest}
                                    renderItem={({ item, index }) =>
                                        <View >
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                <View style={commonstyles.latestCard}>
                                                    <View style={{ marginRight: 5, flex: 1.2 }}>
                                                        <Image source={{ uri: item.web_featured_image }} style={commonstyles.latestImage} />
                                                    </View>
                                                    <View style={{ marginBottom: 5, marginTop: 10, flex: 1.9 }}>
                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                            style={commonstyles.latestText}>{decode(item.title.rendered)}</Text>
                                                        <View style={commonstyles.timeview}>
                                                            <Text style={commonstyles.latesttime}>{(moment(item.date_gmt).format('DD-MMM-YYYY'))} , </Text>
                                                            <Text style={commonstyles.latesttime}>{(moment(item.modified).utcOffset('+05:30').format('hh.mm a'))}  </Text>
                                                        </View>

                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                        </View>
                                    }
                                />
                            </View>
                            :
                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                {/* <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text> */}
                            </View>
                    }
                </View>
                {/* </ScrollView> */}

                {
                    this.state.isLoading == false &&

                    <View style={commonstyles.loading}>
                        <ActivityIndicator color={appThemeColor} size='large' />
                    </View>
                }
            </SafeAreaView >
        )
    }
}