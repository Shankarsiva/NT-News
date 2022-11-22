import * as React from 'react';
import { Dimensions, Image, Text, View, Linking, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import SideMenu from '../Sreens/SideMenu/SideMenu'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { appThemeColor, graycode, whitecolor,Dark_garycolor, blackcolor } from '../Styles/CommonStyles';
import Home from '../Screens/Home';
import SideMenu from '../Screens/SideMenu';
import LatestNews from '../Screens/Bottom Tab Screens/LatestNews';
import Epaper from '../Screens/Bottom Tab Screens/epaper';
import NewsArticle from '../Screens/NewsArticle';
import { Agriculture, Business, Hyderabad, Lifestyle } from '../Utilities/Api/Urls';
import HyderabadNews from '../Screens/Top Tab Screens/Hyderabad';
import NationalNews from '../Screens/Top Tab Screens/National';
import InternationalNews from '../Screens/Top Tab Screens/International';
import TelanganaNews from '../Screens/Top Tab Screens/Telangana';
import ApNews from '../Screens/Top Tab Screens/Ap';
import CinemaNews from '../Screens/Top Tab Screens/Cinema';
import SportsNews from '../Screens/Top Tab Screens/Sports';
import ChinthanaNews from '../Screens/Top Tab Screens/Chinthana';
import EducationNews from '../Screens/Top Tab Screens/Education';
import BusinessNews from '../Screens/Top Tab Screens/Business';
import SpecialNews from '../Screens/Top Tab Screens/Special';
import NriNews from '../Screens/Top Tab Screens/Nri';
import LifestyleNews from '../Screens/Top Tab Screens/LifeStyle';
import PhotosNews from '../Screens/Top Tab Screens/Photos';
import VideosNews from '../Screens/Top Tab Screens/Videos';
import MoreNews from '../Screens/Top Tab Screens/More';
import ScienceNews from '../Screens/Top Tab Screens/Science';
import CartoonNews from '../Screens/Top Tab Screens/Cartoon';
import EvergreenNews from '../Screens/Top Tab Screens/Evergreen';
import CrimeNews from '../Screens/Top Tab Screens/Crime';
import ZindagiNews from '../Screens/Top Tab Screens/Zindagi';
import BathukammaNews from '../Screens/Top Tab Screens/Bathukamma';
import TourismNews from '../Screens/Top Tab Screens/Tourism';
import SahithyamNews from '../Screens/Top Tab Screens/Sahithyam';
import VaasthuNews from '../Screens/Top Tab Screens/Vaasthu';
import HealthNews from '../Screens/Top Tab Screens/Health';
import KathaluNews from '../Screens/Top Tab Screens/Kathalu';
import CookingNews from '../Screens/Top Tab Screens/Cooking';
import SampadhaNews from '../Screens/Top Tab Screens/Sampadha';
import EditpageNews from '../Screens/Top Tab Screens/Editpage';
import AgricultureNews from '../Screens/Top Tab Screens/Agriculture';
import ContactUs from '../Screens/Contact Screens/ContactUs';
import AboutUs from '../Screens/Contact Screens/AboutUs';
import PrivacyPolicy from '../Screens/Contact Screens/PrivacyPolicy';
import Terms from '../Screens/Contact Screens/Terms';
import PhotoArticle from '../Screens/PhotoArticle';
import VarthaluNews from '../Screens/Top Tab Screens/Varthalu';
import VideoArticle from '../Screens/VideoArticle';
import Category from '../Screens/Top Tab Screens/Category';
import CartoonArticle from '../Screens/CartoonArticle';
import SplashScreen from '../Custom Components/Splash';


const Tab = createBottomTabNavigator();


 function BottomTab() {

  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ focused }) =>({
          tabBarActiveTintColor: appThemeColor,
          tabBarInactiveTintColor: 'gray',
          style: { backgroundColor: 'rgba(52, 52, 52, 0.8)' },
          tabBarLabelStyle: { fontSize: 12,fontWeight:'700'},
          tabBarItemStyle: { width: 100, },
          tabBarStyle: {
            backgroundColor: '#d8f3fc', height: 45
          },
          tabBarOptions: {
            activeBackgroundColor: appThemeColor,
            inactiveBackgroundColor: appThemeColor,
            showLabel: true,
           
          }

        })}
      >

        <Tab.Screen
          name="Home" component={AppDrawer}
          options={{
            headerShown: false, tabBarLabel: 'Home',
            tabBarIcon: ({ color,focused }) => (
              // <Entypo name="home" size={20}  style={{ tintColor: focused ? appThemeColor : null,top: 5 }} />

              <Image style={{ height: 20, width: 20,tintColor: focused ? appThemeColor : 'gray',top: 5 }} 
              source={require('../Assets/Images/home.png')} />
            ),
          }} />
        <Tab.Screen
          name="LatestNews" component={LatestNews}
          options={{
            headerShown: false, tabBarLabel: 'Latest News',
            tabBarIcon: ({ color,focused }) => (
              // <Entypo name="open-book" size={20} color={appThemeColor} style={{ top: 5 }} />

              <Image style={{ height: 20, width: 20,tintColor: focused ? appThemeColor : 'gray',top: 5 }} 
              source={require('../Assets/Images/topnews.png')} />
            ),
          }} />
        <Tab.Screen
          name="SideMenu" component={SideMenu}
          options={{
            headerShown: false, tabBarLabel: 'Menu',

            tabBarIcon: ({ color ,focused}) => (
              <Image style={{ height: 20, width: 20,tintColor: focused ? appThemeColor : 'gray',top: 5 }} 
              source={require('../Assets/Images/categories.png')} />

              // <Entypo name="open-book" size={20} color={appThemeColor} style={{ top: 5 }} />

            ),
          }} />
        <Tab.Screen name="Epaper" component={Epaper}

          options={{
            headerShown: false, tabBarLabel: 'e-Paper',
            tabBarButton: props => (
              <TouchableOpacity {...props} onPress={() => { Linking.openURL('https://epaper.ntnews.com/') }} />
            ),

            tabBarIcon: ({ color,focused }) => (
              <Image style={{ height: 20, width: 20,tintColor: focused ? appThemeColor : 'gray',top: 5 }} 
              source={require('../Assets/Images/paper.png')} />
              // <Entypo name="open-book" size={20} color={appThemeColor} style={{ top: 5 }} />
              ),
          }} />


      </Tab.Navigator>

    // </NavigationContainer>


  );

}
const Stack = createStackNavigator();
export default function MainStack({}) {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name="splash" component={SplashScreen}/>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* <Stack.Screen name="Category" component={Category} /> */}
      <Stack.Screen name="Details" component={NewsArticle} />
      <Stack.Screen name="PhotoGalleryArticle" component={PhotoArticle} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="CartoonArticle" component={CartoonArticle} />
      <Stack.Screen name="Varthalu" component={VarthaluNews} />
      <Stack.Screen name="Hyderabad" component={HyderabadNews} />
      <Stack.Screen name="National" component={NationalNews} />
      <Stack.Screen name="InterNational" component={InternationalNews} />
      <Stack.Screen name="Telangana" component={TelanganaNews} />
      <Stack.Screen name="Ap" component={ApNews} />
      <Stack.Screen name="Cinema" component={CinemaNews} />
      <Stack.Screen name="Sports" component={SportsNews} />
      <Stack.Screen name="Chinthana" component={ChinthanaNews} />
      <Stack.Screen name="Education" component={EducationNews} />
      <Stack.Screen name="Business" component={BusinessNews} />
      <Stack.Screen name="Special" component={SpecialNews} />
      <Stack.Screen name="Nri" component={NriNews} />
      <Stack.Screen name="LifeStyle" component={LifestyleNews} />
      <Stack.Screen name="Photos" component={PhotosNews} />
      <Stack.Screen name="Videos" component={VideosNews} />
      <Stack.Screen name="More" component={MoreNews} />
      <Stack.Screen name="Science" component={ScienceNews} />
      <Stack.Screen name="Cartoon" component={CartoonNews} />
      <Stack.Screen name="EverGreen" component={EvergreenNews} />
      <Stack.Screen name="Crime" component={CrimeNews} />
      <Stack.Screen name="Zindagi" component={ZindagiNews} />
      <Stack.Screen name="Bathukamma" component={BathukammaNews} />
      <Stack.Screen name="Tourism" component={TourismNews} />
      <Stack.Screen name="Agriculture" component={AgricultureNews} />
      <Stack.Screen name="EditPage" component={EditpageNews} />
      <Stack.Screen name="Sampadha" component={SampadhaNews} />
      <Stack.Screen name="Cooking" component={CookingNews} />
      <Stack.Screen name="Kathalu" component={KathaluNews} />
      <Stack.Screen name="Health" component={HealthNews} />
      <Stack.Screen name="Vaasthu" component={VaasthuNews} />
      <Stack.Screen name="Sahithyam" component={SahithyamNews} />


    </Stack.Navigator>
    </NavigationContainer>
  )
}

const Drawer = createDrawerNavigator();
function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 250,
      },
    }}
      initialRouteName="Home" drawerContent={props => <SideMenu{...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="LatestNews" component={LatestNews} />
      {/* <Drawer.Screen name="Category" component={Category} /> */}
      <Drawer.Screen name="PhotoGalleryArticle" component={PhotoArticle} />
      <Drawer.Screen name="VideoArticle" component={VideoArticle} />
      <Drawer.Screen name="CartoonArticle" component={CartoonArticle} />
      <Drawer.Screen name="Details" component={NewsArticle} />
      <Drawer.Screen name="Varthalu" component={VarthaluNews} />
      <Drawer.Screen name="Hyderabad" component={HyderabadNews} />
      <Drawer.Screen name="National" component={NationalNews} />
      <Drawer.Screen name="InterNational" component={InternationalNews} />
      <Drawer.Screen name="Telangana" component={TelanganaNews} />
      <Drawer.Screen name="Ap" component={ApNews} />
      <Drawer.Screen name="Cinema" component={CinemaNews} />
      <Drawer.Screen name="Sports" component={SportsNews} />
      <Drawer.Screen name="Chinthana" component={ChinthanaNews} />
      <Drawer.Screen name="Education" component={EducationNews} />
      <Drawer.Screen name="Business" component={BusinessNews} />
      <Drawer.Screen name="Special" component={SpecialNews} />
      <Drawer.Screen name="Nri" component={NriNews} />
      <Drawer.Screen name="LifeStyle" component={LifestyleNews} />
      <Drawer.Screen name="Photos" component={PhotosNews} />
      <Drawer.Screen name="Videos" component={VideosNews} />
      <Drawer.Screen name="More" component={MoreNews} />
      <Drawer.Screen name="Science" component={ScienceNews} />
      <Drawer.Screen name="Cartoon" component={CartoonNews} />
      <Drawer.Screen name="EverGreen" component={EvergreenNews} />
      <Drawer.Screen name="Crime" component={CrimeNews} />
      <Drawer.Screen name="Zindagi" component={ZindagiNews} />
      <Drawer.Screen name="Bathukamma" component={BathukammaNews} />
      <Drawer.Screen name="Tourism" component={TourismNews} />
      <Drawer.Screen name="Agriculture" component={AgricultureNews} />
      <Drawer.Screen name="EditPage" component={EditpageNews} />
      <Drawer.Screen name="Sampadha" component={SampadhaNews} />
      <Drawer.Screen name="Cooking" component={CookingNews} />
      <Drawer.Screen name="Kathalu" component={KathaluNews} />
      <Drawer.Screen name="Health" component={HealthNews} />
      <Drawer.Screen name="Vaasthu" component={VaasthuNews} />
      <Drawer.Screen name="Sahithyam" component={SahithyamNews} />
      <Drawer.Screen name="Contact" component={ContactUs} />
      <Drawer.Screen name="About" component={AboutUs} />
      <Drawer.Screen name="Privacy" component={PrivacyPolicy} />
      <Drawer.Screen name="Terms" component={Terms} />

    </Drawer.Navigator>

  )
}
const TopTab = createMaterialTopTabNavigator();
function TopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Home} />
      <TopTab.Screen name="LatestNews" component={LatestNews} />
    </TopTab.Navigator>


  )
}

