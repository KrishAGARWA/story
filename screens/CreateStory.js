import React,{Component} from "react"
import { Text,View ,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ScrollView,TextInput,Dimensions} from "react-native"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import {RFValue} from "react-native-responsive-fontsize"
import DropDownPicker from "react-native-dropdown-picker"
import { title } from "min-document"

let customFonts={
    "Bubblegam-sans":require("../assets/fonts/BubblegumSans-Regular.ttf")
}
export default class CreateStory extends Component{
    constructor(props){
        super(props)
this.state={
    fontsLoaded:false,
    previewImage:"image_1"
}
}
async _loadFontsAsync(){
    await Font.loadAsync(customFonts)
    this.setState({
        fontsLoaded:true
    })
}
componentDidMount(){
    this._loadFontsAsync()
}

    render(){
       if (!this.state.fontsLoaded) {
           return <AppLoading/>
       }else {
           let preview_images={
               "image_1":require("../assets/story_image_1.png"),
               "image_2":require("../assets/story_image_2.png"),
               "image_3":require("../assets/story_image_3.png"),
               "image_4":require("../assets/story_image_4.png"),
               "image_5":require("../assets/story_image_5.png"),
           }
           return(
               <View style={styles.container}>
                   <SafeAreaView style={styles.droidSafeArea}/>
                   <View style={styles.appTitle}>
                       <View style={styles.appIcon}>
                           <Image source={require("../assets/logo.png")} style={{width:60,height:60,resizeMode:"contain",
                           marginLeft:10}}>  </Image>
                       </View>
                       <View style={styles.appTitleTextContainer}>
                           <Text style={styles.appTitleText}>New Story</Text>
                       </View>
                   </View>
                   <ScrollView style={styles.fieldContainer}>
                       <View style={styles.imageContainer}>
                           <View style={styles.previewConatiner}>
                               <Image source ={preview_images[this.state.previewImage]} 
                               style={{resizeMode:"contain",width:Dimensions.get("window").width-40,
                               height:250,borderRadius:10,marginBottom:10}}></Image>
                           </View>
                           <View style={{height:RFValue(this.state.dropdownHeight)}}>
                               <DropDownPicker 
                               items={[
                                   { label:"Image 1",value:"image_1" },
                                   { label:"Image 2",value:"image_2" },
                                   { label:"Image 3",value:"image_3" },
                                   { label:"Image 4",value:"image_4" },
                                   { label:"Image 5",value:"image_5" }
                               ]} 
                               defaultValue={this.state.previewImage}
                               containerStyle={{height:40,borderRadius:20,marginBottom:10}}
                               style={{backgroundColor:"transparent"}}
                               itemStyle={{justifyContent:"flex-start"}}
                               dropDownStyle={{backgroundColor:"red"}}
                               labelStyle={{color:"white",fontFamily:"Bubblegum-Sans"}}
                               arrowStyle={{color:"white",fontFamily:"Bubblegum-Sans"}}
                               onChangeItem={item=>this.setState({
                                   previewImage:item.value
                               })}/>
                           </View>
                       </View>
                       <View stye={styles.fieldContainer}>
                           <TextInput style={styles.inputFont} onChangeText={(title)=>this.setState({title})}
                           placeholder={"Title"}
                           placeholderTextColor="white"/>
                               
                          
                       </View>
                       <View stye={styles.fieldContainer}>
                       <TextInput style={[styles.inputFont,styles.inputFontExtra,styles.inputTextBig]} 
                       onChangeText={(description)=>this.setState({description})}
                           placeholder={"Description"}
                           placeholderTextColor="white"
                           multiline={true }
                           numberOfLines={4}
                           /> 
                       </View>
                       
                       <View stye={styles.fieldContainer}>
                       <TextInput style={[styles.inputFont,styles.inputFontExtra,styles.inputTextBig]} 
                       onChangeText={(story)=>this.setState({story})}
                           placeholder={"Story"}
                           placeholderTextColor="white"
                           multiline={true }
                           numberOfLines={20}
                           /> 
                       </View>
                    
                       <View stye={styles.fieldContainer}>
                       <TextInput style={[styles.inputFont,styles.inputFontExtra,styles.inputTextBig]} 
                       onChangeText={(moral)=>this.setState({moral})}
                           placeholder={"Moral Of The Story"}
                           placeholderTextColor="white"
                           multiline={true }
                           numberOfLines={4}
                           /> 
                       </View>
                   </ScrollView>
                   
               </View>
           )
       }
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    fieldContainer: {
      flex: 0.85
    },
    
    inputFont:{
        height:RFValue(40),
        borderColor:"white",
        borderWidth:RFValue(1),
        borderRadius:RFValue(10),
        paddingLeft:RFValue(10),
        color:"white",
        fontFamily:"Bubblegum-Sans"
    },
    inputFontExtra:{
        marginTop:RFValue(15)
    },
    inputTextBig:{
        textAlignVertical:"top",
        padding:RFValue(5)
    }
  });