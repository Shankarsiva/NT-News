import { StyleSheet, Dimensions } from 'react-native';
// export const appThemeColor = "#337DFF"
//3349FF,339fff
export const appThemeColor = "#2e3397";
export const whitecolor = "#FFFFFF"
export const graycolor = "#e4e3e3"
export const Dark_graycolor = "#808080"
export const blackcolor = "#000000"
export const gallerycolor = "#1b120b"
export const light_blue = "#d8f3fc"
export const dark_blue = "#bae6f5"
export const Header_text = "#262A85"
export const Header_BG_Color="#030533"
export const TimeStamp = "#8D8D8D"
export const Gary_Light="#f5f5f5"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const commonstyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: whitecolor
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
  },
  menuview: {
    // backgroundColor: appThemeColor,
    alignItems: 'center',
    marginRight: 10,
    left: 20
  },
  menutext: {
    // backgroundColor: whitecolor,
    paddingHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    color: blackcolor,
    fontSize: 22,
    fontFamily: "Mandali-Bold",
    // fontWeight: '500'
  },
  slidercard: {
    height: 200,
    width: screenWidth - 10,
    // width: '100%',
    // flex: 1,
    // margin: 5,
    // marginLeft: 5,
    // marginRight: 5,
    // resizeMode: "stretch",
    borderRadius: 15,

  },
  slidertext: {
    color: whitecolor,
    fontFamily: 'Mandali-Bold',
    // fontWeight:'bold',
    fontSize: 22,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29

  },
  sliderGradient: {
    width: '100%', flex: 1, bottom: 0, borderBottomLeftRadius: 15,
     borderBottomRightRadius: 15,
    position: 'absolute',
  },
  Category: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 27,
    top:8
    // fontWeight: '400'

  },
  sliderView:{
    position: 'relative', backgroundColor: 'transparent',
    opacity: 0.8
},
  dot: {
    marginTop: 22, marginLeft: 5
  },
  latestCard: {
    backgroundColor: "#fff",
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  latestImage: {
    width: "100%", height: screenHeight * 0.12,
    borderRadius: 10
  },
  cateView: { flexDirection: 'row', marginLeft: 5, width: '100%' },
  cateImage: { width: 120, height: 90, borderRadius: 10, },
  latestText: { color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 20, lineHeight: 33, },
  latesttime: { color: appThemeColor, fontSize: 16, fontFamily: 'JIMS', },
  cardView: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  latestViewcard:{
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    width:'100%',
    // height:120,
    borderRadius: 10,
    // flexDirection: 'row',
    // flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
   
  },
  cardViewHome: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    // borderBottomColor:graycolor,
    // borderBottomWidth:1.3

  },
  cinemaText: {
    // color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 29,
    color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 30,
  },
  SportCard: {
    flex: 1,
    backgroundColor: "#fff",
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: 170,
    // height: Dimensions.get('window').height * 0.12,
    flexDirection: 'row'
  },

  sportimage: {
    height: Dimensions.get('window').height * 0.12,
    borderRadius: 10, resizeMode: "center",
  },
  CartoonCard: {

    flex: 1,
    backgroundColor: "#fff",
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height:650,
    flexDirection: 'row'
  },
  pcard: {
    // flex: 1,
    width:'95%',
    backgroundColor: "#fff",
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.32,
    flexDirection: 'row'
  },
  vcard: {
    // flex: 1,
    width:'95%',
    backgroundColor: whitecolor,
    elevation: 1, 
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.3,
    flexDirection: 'row'
  },
  pimg: {
    width: "98%", height: 180,
    borderRadius: 10, resizeMode: "contain", margin: 5
    // width: '100%', height: 280, resizeMode: "contain",

  },
  vimg: {
    width: "96%", height: 180,
    borderRadius: 10, resizeMode: "contain", margin: 5
    // width: '100%', height: 280, resizeMode: "contain",

  },
  cartoonimg: {
    width: screenWidth-20, height: 600,
    borderRadius: 10, resizeMode: 'cover', margin: 5
    // width: '100%', height: 280, resizeMode: "contain",

  },
  photoimage: {
    width: "110%",
    height: Dimensions.get('window').height * 0.13,
    borderRadius: 15,
    resizeMode: "center",
  },
  SportText: {
    color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 18, lineHeight: 25, margin: 5
  },
  Detailslargecard: {
    flex: 1,
    height: 230,
    margin: 10,
    borderRadius: 10
  },
  detailTime: {
    color: TimeStamp,
    fontFamily: 'JIMS',
    fontSize: 20

  },
  timeview: {
    flexDirection: 'row',
    top: -5
  },
  cateviewText: {  flex: 1.9,
    fontFamily: 'Mandali-Regular', fontSize: 20, lineHeight: 33,justifyContent:'center' },
  cateviewImg: { marginRight: 5 },
  cateflist: { paddingBottom: 150, top: 10, margin: 5 },

  videoImg: {
    width: Dimensions.get('window').width * 0.3, height: Dimensions.get('window').height * 0.2, borderRadius: 10, resizeMode: "stretch",
  },
  categoryView: { flex: 1.7, flexDirection: 'row' },
  flatView: { position: 'relative', marginBottom: -10 }
})