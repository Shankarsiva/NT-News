import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView, TouchableHighlight } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer'
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../Styles/CommonStyles'
import { sideMenuStyle } from '../Styles/SideMenuStyles'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from "react-native-modal";

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawerItem: false,
            VarthaluItem: false,

        }
    }
    varthaluDrawerItem = () => {
        if (this.state.VarthaluItem == true) {
            this.setState({ VarthaluItem: false })
        }
        else {
            this.setState({ VarthaluItem: true })
        }
    }
    NestedDrawerItem = () => {
        if (this.state.DrawerItem == true) {
            this.setState({ DrawerItem: false })
        }
        else {
            this.setState({ DrawerItem: true })
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1, paddingTop: 20, backgroundColor: graycolor, }}>
                    <View style={{ backgroundColor: appThemeColor, flexDirection: 'row' }}>
                        <View style={{width:'90%'}}>
                            <Text style={sideMenuStyle.sectionsText}>Sections</Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }}>
                            <AntDesign name="close" size={23} color={whitecolor} style={{ top: 5,alignSelf:'flex-end',justifyContent:'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>
                        <DrawerItem style={sideMenuStyle.item}

                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/homeblack.png')} style={sideMenuStyle.icon} />
                            }
                            label="????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Home")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/varthalu.png')} style={sideMenuStyle.icon} />
                            }
                            label={({ color }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View>
                                        <Text style={sideMenuStyle.text}>?????????????????????</Text>
                                    </View>
                                    {/* <TouchableHighlight onPress={() => {
                                        this.varthaluDrawerItem()
                                    }}>
                                        <AntDesign name="caretdown" size={15} color={blackcolor} style={{ top: 5 }} />
                                    </TouchableHighlight> */}
                                </View>
                            )}
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Varthalu")
                            }}

                        />

                        {/* <Modal>
                            <View>
                                {this.state.VarthaluItem == true && ( */}
                        <DrawerItem style={sideMenuStyle.item}

                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/hyderabad.png')} style={sideMenuStyle.icon} />
                            }
                            label="???????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Hyderabad")
                            }}
                        />
                        {/* )} */}
                        {/* {this.state.VarthaluItem == true && ( */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/national.png')} style={sideMenuStyle.icon} />
                            }
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("National")
                            }}
                        />
                        {/* )} */}
                        {/* {this.state.VarthaluItem == true && ( */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/international.png')} style={sideMenuStyle.icon} />
                            }
                            label="?????????????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("InterNational")
                            }}
                        />
                        {/* )} */}
                        {/* {this.state.VarthaluItem == true && ( */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/telangana.png')} style={sideMenuStyle.icon} />
                            }
                            label="?????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Telangana")
                            }}
                        />
                        {/* )} */}
                        {/* {this.state.VarthaluItem == true && ( */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/ap.png')} style={sideMenuStyle.icon} />
                            }
                            label="?????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Ap")
                            }}
                        />
                        {/* )} */}
                        {/* </View>
                        </Modal> */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/cinema.png')} style={sideMenuStyle.icon} />
                            }
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Cinema")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/sports.png')} style={sideMenuStyle.icon} />
                            }
                            label="??????????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Sports")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/chinthana.png')} style={sideMenuStyle.icon} />
                            }
                            label="???????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Chinthana")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/education.png')} style={sideMenuStyle.icon} />
                            }
                            label="?????????????????????????????? & ??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Education")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/business.png')} style={sideMenuStyle.icon} />
                            }
                            label="????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Business")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/special.png')} style={sideMenuStyle.icon} />
                            }
                            label="???????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Special")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/nri.png')} style={sideMenuStyle.icon} />
                            }
                            label="???????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Nri")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/lifestyle.png')} style={sideMenuStyle.icon} />
                            }
                            label="?????????????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("LifeStyle")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/photos.png')} style={sideMenuStyle.icon} />
                            }
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Photos")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/video.png')} style={sideMenuStyle.icon} />
                            }
                            label="????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Videos")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/more.png')} style={sideMenuStyle.icon} />
                            }

                            label={({ color }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View>
                                        <Text style={sideMenuStyle.text}>?????????????????????</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        this.NestedDrawerItem()
                                    }}>
                                        <AntDesign name="caretdown" size={15} color={blackcolor} style={{ top: 5 }} />
                                    </TouchableOpacity>
                                </View>
                            )}
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("More")
                            }}
                        />
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/science.png')} style={sideMenuStyle.icon} />
                                }
                                label="????????????????????? ??????????????? ???????????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Science")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/cartoon.png')} style={sideMenuStyle.icon} />
                                }
                                label="???????????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Cartoon")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/evergreen.png')} style={sideMenuStyle.icon} />
                                }
                                label="????????????????????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("EverGreen")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/crime.png')} style={sideMenuStyle.icon} />
                                }
                                label="?????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Crime")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/zindagi.png')} style={sideMenuStyle.icon} />
                                }
                                label="??????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Zindagi")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/bathukamma.png')} style={sideMenuStyle.icon} />
                                }
                                label="?????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Bathukamma")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/tourism.png')} style={sideMenuStyle.icon} />
                                }
                                label="??????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Tourism")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/agriculture.png')} style={sideMenuStyle.icon} />
                                }
                                label="????????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Agriculture")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/editpage.png')} style={sideMenuStyle.icon} />
                                }
                                label="?????????????????? ????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("EditPage")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/sampadha.png')} style={sideMenuStyle.icon} />
                                }
                                label="????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Sampadha")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/cooking.png')} style={sideMenuStyle.icon} />
                                }
                                label="???????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Cooking")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/kathalu.png')} style={sideMenuStyle.icon} />
                                }
                                label="????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Kathalu")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/health.png')} style={sideMenuStyle.icon} />
                                }
                                label="?????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Health")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}

                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/vaasthu.png')} style={sideMenuStyle.icon} />
                                }
                                label="??????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Vaasthu")
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem style={sideMenuStyle.item}
                                icon={({ color, size }) =>
                                    <Image source={require('../Assets/Images/sidemenuIcons/sahithyam.png')} style={sideMenuStyle.icon} />
                                }
                                label="????????????????????????"
                                labelStyle={sideMenuStyle.text}
                                onPress={() => {
                                    this.props.navigation.navigate("Sahithyam")
                                }}
                            />
                        )}


                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/contact.png')} style={sideMenuStyle.icon} />
                            }
                            label="Contact Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Contact")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/about.png')} style={sideMenuStyle.icon} />
                            }
                            label="About Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("About")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/privacy.png')} style={sideMenuStyle.icon} />
                            }
                            label="Privacy Policy"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Privacy")
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/conditions.png')} style={sideMenuStyle.icon} />
                            }
                            label="Terms and Conditions"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Terms")
                            }}
                        />







                    </ScrollView>

                </View >
            </SafeAreaView>
        )

    }


}