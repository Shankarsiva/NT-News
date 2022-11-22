
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Share, ActivityIndicator, StyleSheet, Alert, Dimensions } from 'react-native'
import { commonstyles, appThemeColor, graycode } from '../Styles/CommonStyles'
import Header from '../Custom Components/Header/Header'
import AutoHeightWebView from 'react-native-autoheight-webview'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Article, BaseUrl, HomeSlider, RelatedUrl } from '../Utilities/Api/Urls';
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler';
// import SubHeader from '../Header/SubHeader';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import { HeaderStyle } from '../Custom Components/Header/Header.Styles';
import SubHeader from '../Custom Components/SubHeader/SubHeader';
const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;
export default class PhotoArticle extends Component {
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
        }


    };

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate() {
        if (this.state.data != this.props.route.params.data) {
            this.fetchData()
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
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
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

    render() {
        let source1 = this.state.data.content.rendered.replace('lazyload', 'text/javascript')
        const INJECTEDJAVASCRIPT = "document.body.style.userSelect = 'none'";

       // var tmp = inner.replace(array(/<a .*?>/g,'</a>'),"",);
        const result1 = this.state.data.content.rendered.replace(/<a .*?>/g,"");
        const result = result1.replace(/<a>/g,"");
        let decode = require('html-entities-decoder')

        return (

            <View style={commonstyles.container}>

                <Header  image={require('../Assets/Images/logo.png')}
 isMenu={true} leftBtnClick={() => {
                    this.props.navigation.openDrawer()
                }} isNotif={true} />
                <View >
                    <SubHeader isMenu={false} isBook={false} isShare={true}
                        leftBtnClick={() => this.props.navigation.goBack(null)}
                        ShareClick={() => { this.share() }}
                        BookClick={() => { alert("BookMark   Clicked") }}
                    />
                </View>
                <ScrollView ref='_scrollView'>
                    <View>


                        <View style={{ margin: 10, flex: 1 }}>
                            <HTMLView
                                value={"<p>" + this.state.data.title.rendered + "</p>"}
                                stylesheet={headerStyles}
                            />
                        </View>
                        <View>
                       
                            <AutoHeightWebView
                           androidHardwareAccelerationDisabled// update here androidLayerType="software"
                                style={{ width: Dimensions.get('window').width - 15 }}

                                customStyle={`
                                  * {
                                    font-family: 'JIMS';
                                    -webkit-user-select: none;
                                    -webkit-touch-callout: none; 
                                  }
                                  p {
                                    font-size: 16px;
                                    text-align:justify;
                                    
                                                                  }
                                                                  div{
                                                                    margin:10px 0px 0px 10px;
                                                                  }
                                                                  img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                 
                                `}

                                source={{ html: result }}
                                scalesPageToFit={false}
                                viewportContent={'width=device-width, user-scalable=no'}

                            />
                           
                        </View>






                        {/* Related News */}
                        {/* <View style={{ marginLeft: 10, marginBottom: 20 }}>
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'Ramabhadra-Regular' }}>
                                Related News
                            </Text>
                        </View> */}
                        {/* Related news FlatList */}

                        <View style={{ position: 'relative' }}>
                            {/* <CustomLoader visible={this.state.spinner}/> */}
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                persistentScrollbar={false}
                                data={this.state.onlyRelated}

                                renderItem={({ item, index }) =>
                                <View >
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                    <View style={commonstyles.cardView}>
                                        <View style={commonstyles.cateviewImg}>
                                            <Image source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
                                        </View>
                                        <View style={commonstyles.cateviewText}>
                                            <Text numberOfLines={2} ellipsizeMode='tail'
                                                style={commonstyles.latestText}> {(moment(item.modified).utcOffset('+05:30').format('hh.mm a'))}</Text>
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
                </ScrollView>
                {
                    this.state.isLoading == false &&

                    <View style={commonstyles.loading}>
                        <ActivityIndicator color={appThemeColor} size='large' />
                    </View>
                }
            </View>
        )
    }
};
const styles = StyleSheet.create({
    p: {}

})
const headerStyles = StyleSheet.create({
    p: { color: appThemeColor, fontSize: 26, fontFamily: 'JIMS', lineHeight: 37, }

})
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 18, fontFamily: 'JIMS', lineHeight: 25, top: 10 }
})