import React, { Component } from "react";
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView, SafeAreaView, Share } from "react-native";
import Header from "../../Custom Components/Header/Header";
import SubHeader from "../../Custom Components/SubHeader/SubHeader";
import { appThemeColor, commonstyles, whitecolor } from "../../Styles/CommonStyles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { blackcolor, ContactStyles } from "../../Styles/ContactScreenStyles";
import { HeaderStyle } from "../../Custom Components/Header/Header.Styles";


export default class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        return (
            <SafeAreaView styles={commonstyles.container}>
                <Header  image={require('../../Assets/Images/logo.png')}
 isMenu={true} isNotif={true}
                    leftBtnClick={() => this.props.navigation.openDrawer()}
                    NotificationClick={() => this.props.navigation.navigate("LatestNews")} />
                <View style={[HeaderStyle.subHeaderviewHeight]}>
                    <View style={{ flex: 0.5 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <MaterialIcons name="arrow-back" size={40} color={blackcolor} style={{ left: 8 }} />
                        </TouchableOpacity >
                    </View>
                    <View style={{ flex: 1, marginLeft: -120 }}>
                        <Text style={[ContactStyles.heading]}>About Us</Text>
                    </View>
                </View>
                {/* <SubHeader title={"About Us "} isMenu={false} isBook={false} isShare={false}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    ShareClick={() => { this.sharecall() }}
                    BookClick={() => { alert("BookMark   Clicked") }}
                /> */}
                <ScrollView>
                    <View style={ContactStyles.mainView}>

                        <View style={ContactStyles.subView}>

                            <Text style={ContactStyles.title}>Namasthe Telangana!</Text>
                            <Text style={ContactStyles.content}>The newest entrant into the highly competitive media arena of Telangana, we are an energetic team of both experienced and young journalists, striving to bring everything that is Telangana, and Hyderabad, to our readers.</Text>
                            <Text style={ContactStyles.content}>And we hope to do that in the fastest way possible, using the latest technology, combining multimedia with the highest standards of long form journalism, with credibility, and in whichever way that connects with the reader, be it through our pages, through various social media including Twitter and Facebook or our own website, which will be up to date and alert round the clock, just like our journalists.</Text>
                            <Text style={ContactStyles.content}>Namasthe Telangana is published from Hyderabad in Telangana, we bring breaking news, timely updates and extensive coverage, apart from a daily rich spread of news and views on Hyderabad and Telangana, the politics here, the burgeoning business centres, IT hubs and the cutting edge technology crafted in the youngest State in India, transportation and civic issues, developmental projects across varied sectors, the heritage that defines Hyderabad, exciting sports events, Tollywood’s groundbreaking movies, and much more.</Text>

                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}