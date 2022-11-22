import React, { Component } from "react";
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView, SafeAreaView, Share } from "react-native";
import Header from "../../Custom Components/Header/Header";
import SubHeader from "../../Custom Components/SubHeader/SubHeader";
import { appThemeColor, commonstyles } from "../../Styles/CommonStyles";
import { BaseUrl, CategoryUrl, National, Photos, ShareUrl } from "../../Utilities/Api/Urls";
import moment from 'moment'
import FastImage from 'react-native-fast-image'

export default class PhotosNews extends Component {
    constructor(props) {
        super(props);
        console.log(props, "props")
        this.state = {
            HyderabadData: [],
            isLoading: false
        }
    };
    componentDidMount() {
        fetch(BaseUrl + CategoryUrl + Photos).then((response) => response.json())
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
        const Link_Url = ShareUrl + Photos
        Share.share({
            message: Link_Url
        })
            .then((result) => console.log(result))
            .then((error) => console.log(error))
    }
    render() {
        const regex = /(<([^&#;>]+)>)/ig

        return (
            <SafeAreaView styles={commonstyles.container}>
                <Header  image={require('../../Assets/Images/logo.png')}
 isMenu={true} isNotif={true}
                    leftBtnClick={() => this.props.navigation.openDrawer()}
                    NotificationClick={() => this.props.navigation.navigate("LatestNews")} />
                <SubHeader title={"ఫొటోలు "} isMenu={false} isBook={false} isShare={true}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    ShareClick={() => { this.sharecall() }}
                    BookClick={() => { alert("BookMark   Clicked") }}
                />
                <ScrollView >
                    <View>
                        {

                            this.state.HyderabadData.length != 0 && { isLoading: true } ?

                                <View >
                                    <FlatList
                                        style={commonstyles.cateflist}
                                        data={this.state.HyderabadData.data}
                                        numColumns={2}
                                        renderItem={({ item, index }) =>

                                            <View style={{ flex: 1, }}>
                                                <View style={commonstyles.SportCard}>
                                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("PhotoGalleryArticle", { data: item }) }}  >
                                                        <Image source={{ uri: item.web_featured_image }} style={commonstyles.photoimage} />
                                                        <View >
                                                            <Text numberOfLines={2} ellipsizeMode='tail' style={commonstyles.SportText}>{item.title.rendered}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>



                                        }

                                    />

                                </View>
                                :
                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                    <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
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