import React, { Component } from "react";
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView, SafeAreaView, Share } from "react-native";
import Header from "../../Custom Components/Header/Header";
import SubHeader from "../../Custom Components/SubHeader/SubHeader";
import { appThemeColor, commonstyles } from "../../Styles/CommonStyles";
import { BaseUrl, CategoryUrl, More, National, ShareUrl } from "../../Utilities/Api/Urls";
import moment from 'moment'
import FastImage from 'react-native-fast-image'

export default class MoreNews extends Component {
    constructor(props) {
        super(props);
        console.log(props, "props")
        this.state = {
            HyderabadData: [],
            isLoading: false
        }
    };
    componentDidMount() {
        fetch(BaseUrl + CategoryUrl + More).then((response) => response.json())
            .then(responseJson => {
                this.setState({ HyderabadData: responseJson, isLoading: true }, () => {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    // share function
    sharecall = () => {
        const Link_Url = ShareUrl + More
        Share.share({
            message: Link_Url
        })
            .then((result) => console.log(result))
            .then((error) => console.log(error))
    }
    render() {
        const regex = /(<([^&#;>]+)>)/ig
        let decode = require('html-entities-decoder')
        return (
            <SafeAreaView styles={commonstyles.container}>
                <Header  image={require('../../Assets/Images/logo.png')}
 isMenu={true} isNotif={true}
                    leftBtnClick={() => this.props.navigation.openDrawer()}
                    NotificationClick={() => this.props.navigation.navigate("LatestNews")} />
                <SubHeader title={"మరిన్ని"} isMenu={false} isBook={false} isShare={true}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    ShareClick={() => { this.sharecall() }}
                    BookClick={() => { alert("BookMark   Clicked") }}
                />
                <ScrollView >
                    <View>
                        {

                            this.state.HyderabadData.length != 0 && { isLoading: true } ?

                                <View style={{ position: 'relative' }}>
                                    <FlatList
                                        style={commonstyles.cateflist}
                                        data={this.state.HyderabadData.data}
                                        renderItem={({ item, index }) =>

                                            <View >
                                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                    <View style={commonstyles.cardView}>
                                                        <View style={commonstyles.cateviewImg}>
                                                            <FastImage source={{ uri: item.web_featured_image }}
                                                                style={commonstyles.cateImage} />
                                                        </View>
                                                        <View style={commonstyles.cateviewText}>
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
                </ScrollView>

                {
                    this.state.isLoading == false &&

                    <View style={commonstyles.loading}>
                        <ActivityIndicator color={appThemeColor} size='large' />
                    </View>
                }
            </SafeAreaView>
        )
    }
}