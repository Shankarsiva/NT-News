
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Share, ActivityIndicator, StyleSheet, Alert, Dimensions, RefreshControl } from 'react-native'
import { commonstyles, appThemeColor, light_blue, dark_blue, Header_text } from '../Styles/CommonStyles'
import Header from '../Custom Components/Header/Header'
// import { WebView } from "react-native-twitter-embed";
import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Article, BaseUrl, HomeSlider, RelatedUrl, MenuUrl } from '../Utilities/Api/Urls';
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler';
// import SubHeader from '../Header/SubHeader';
import HTMLView from 'react-native-htmlview';
import { HeaderStyle } from '../Custom Components/Header/Header.Styles';
import SubHeader from '../Custom Components/SubHeader/SubHeader';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class CinemaDetailsScreen extends Component {
    constructor(props) {
        super(props);
        console.log(props, "props")
        this.state = {
            data: this.props.route.params.data,
            RelatedData: [],
            isLoading: false,
            ArticleData: [],
            NewArticleData: [],
            spinner: false,
            onlyRelated: [],
            time: 0,
            refresh: false,
            MenuData: [],

        }
    };
    componentDidMount() {
        //    Api integration for  Menu
        fetch(BaseUrl + MenuUrl)
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({ MenuData: responseJson, isLoading: true }, () => {

                });

            })
        this.fetchData()
        setTimeout(() => {
            this.setState({ time: '10' });
        }, 500);

    }

    componentDidUpdate() {
        if (this.state.data != this.props.route.params.data) {
            this.fetchData()
            this.goToTop()
        }
    }

    fetchData = () => {
        this.setState({
            ...this.state,
            data: this.props.route.params.data
        })
        var Related_id = this.state.data.id
        //    Api integration for  Related News

        fetch(BaseUrl + RelatedUrl + '?id=' + Related_id)
            .then((response) => response.json())

            .then(responseJson => {
                this.setState({ RelatedData: responseJson, isLoading: true }, () => {
                    var onlyStandard = this.state.RelatedData.data.filter((obj) => {
                        return (obj.format == 'standard')
                    })
                    this.setState({ onlyRelated: onlyStandard }, () => {
                    })
                    var RelateddataId = this.state.RelatedData.id
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // share function
    share = () => {
        Share.share({
            message: this.state.data.link
        })
            .then((result) => console.log(result))
            .then((error) => console.log(error))
    }
    PullMe = () => {
        this.setState({ refresh: true })
        setTimeout(() => {
            this.setState({ refresh: false })

        }, 100)
    }
    goToTop = () => {

        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }
    onFabPress = () => {
        this.scrollRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }
    render() {

        let source1 = this.state.data.content.rendered.replace('lazyload', 'text/javascript')
        const regex = /(<([^>#&'';;]+)>)/ig;
        let decode = require('html-entities-decoder')
        // console.log("related data",this.state.onlyRelated);
        return (

            <View style={commonstyles.container}>

                <Header  image={require('../Assets/Images/logo.png')}
 isMenu={true} leftBtnClick={() => {
                    this.props.navigation.openDrawer()
                }} isNotif={true} NotificationClick={() => this.props.navigation.navigate("LatestNews")} />
                <View >
                    <SubHeader isMenu={false} isBook={false} isShare={true}
                        leftBtnClick={() => this.props.navigation.goBack()}
                        ShareClick={() => { this.share() }}
                        BookClick={() => { alert("BookMark   Clicked") }}
                    />
                </View>

                <ScrollView
                    ref={(c,curent) => { this.scroll = c ,this.scrollRef = curent}}>
                    <View>

                        <View >
                            <FastImage source={{ uri: this.state.data.web_featured_image }} style={commonstyles.Detailslargecard} />
                        </View>

                        <View style={{ margin: 10, }}>
                            <HTMLView
                                value={"<p>" + this.state.data.title.rendered + "</p>"}
                                stylesheet={headerStyles}
                            />

                        </View>

                        <View style={{ flexDirection: 'row', start: 10 }}>
                            <Text style={commonstyles.detailTime}>{(moment(this.state.data.date_gmt).format('MMMM DD , YYYY'))} / </Text>
                            <Text style={commonstyles.detailTime}>{(moment(this.state.data.modified).utcOffset('+05:30').format('hh.mm a'))} IST  </Text>
                        </View>
                        {/* description */}

                        <View style={{ width: screenWidth - 10, justifyContent: 'center', pointerEvents: "none" }}>

                            {/* <WebView
                                style={[styles, { fontFamily: 'Mandali-Regular' }]}
                                source={{ html: source1, baseUrl: 'https://twitter.com' }}
                                javaScriptEnabled={true}
                                scalesPageToFit={false}
                            /> */}
                            {/* <Text>{source1}</Text> */}
                            <AutoHeightWebView
                                androidHardwareAccelerationDisabled // update here androidLayerType="software"

                                customStyle={`
                                  * {
                                    font-family: 'Mandali-Bold';
                                    line-height: 1.5;
                                    -webkit-user-select: none;
                                      -webkit-touch-callout: none; 
                                      
                                  }
                                  p {
                                    font-size: 16px;
                                    text-align:left;
                                    margin:10;
                                    font-family:'Mandali-Regular';
                                    line-height:35px

                                                                  }
                                                                  p img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                  p iframe{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                `}

                                source={{ html: source1, baseUrl: 'https://twitter.com' }}
                                scalesPageToFit={false}
                                viewportContent={'width=device-width, user-scalable=no'}

                            />
                        </View>

                        {/* Related News */}
                        <View>
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Mandali-Bold' }}>
                                    Related News
                                </Text>
                            </View>
                            {/* Related news FlatList */}

                            <View style={{ position: 'relative' }}>
                                {/* <CustomLoader visible={this.state.spinner}/> */}
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    persistentScrollbar={false}
                                    data={this.state.onlyRelated}
                                    // onEndReached={this.PullMe()}
                                    renderItem={({ item, index }) =>

                                        <View >
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                <View style={commonstyles.cardView}>
                                                    <View style={commonstyles.cateviewImg}>
                                                        <Image source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                        </View>
                    </View>
                </ScrollView>
                {
                    this.state.isLoading == false &&

                    <View style={commonstyles.loading}>
                        <ActivityIndicator color={appThemeColor} size='large' />
                    </View>
                }
                <TouchableOpacity onPress={() => { this.onFabPress }} style={{ position: 'absolute', right: 10, bottom: 10 }}>
                    <Image resizeMode='contain' source={require('../Assets/Images/top_arrow.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    p: { color: "#000", fontSize: 22, fontFamily: 'Mandali-Regular', lineHeight: 30 }

})
const headerStyles = StyleSheet.create({
    p: { color: Header_text, fontSize: 24, fontFamily: 'Mandali-Bold', lineHeight: 30, }

})
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 20, fontFamily: 'JIMS', lineHeight: 25, top: 10 }
})