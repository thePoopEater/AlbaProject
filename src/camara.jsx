import { View,Text,Image } from "react-native";
import { Touchable,TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useState,useRef } from "react";
import Video, {VideoRef} from 'react-native-video';
export const Camara = ({navigation}) => {
    
    return(
    <View>
        <View style={{margin:30,marginTop:50}}>
            <Text style={{marginLeft:40,fontSize:50,fontWeight:500}}>Ver Cámara</Text>
                <Text style={{margin:100,marginTop:200}}>Aca iria la imagen </Text>
                <Video 
                    // Can be a URL or a local file.
                    source={{uri:'http://172.20.10.2:5000/video_feed'}}
                    style={{width:200,height:200}}
                    ref = {(ref) => {
                        this.player = ref
                    }}
                    onBuffer ={this.onBuffer}
                    onError = {this.onError}
                />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home screen")}>
        <View style={{height:100,width:'100%',backgroundColor:'black'}}>
            <Text style={{fontSize:40,fontWeight:500,color:'white' ,marginLeft:10,marginTop:5}}>Volver</Text>
        </View>
        </TouchableWithoutFeedback>
    </View>
    );
}