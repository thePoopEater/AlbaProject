import {React,useEffect} from "react";
import { View , Text, Touchable, Image, PermissionsAndroid} from "react-native";
import Constants from 'expo-constants'
import { TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SensorScreen} from './sensorInfo'
import { Configuraciones } from "./configuraciones";
import { ArchivoMedico } from "./archivoMedico.jsx";
import { Alergias } from "./alergias";
import  {Camara}  from "./camara";
import * as d3 from 'd3';
let estadoPSD = 'NORMAL';



function sendMessage(){
    
        fetch("http://172.20.10.2:5000/",{
        method:'POST',
        headers : {
            Accept: '',
            body : JSON.stringify({
                firstParam : '<h1>123213</h1>',
                secondParam : 'Nose',
          }),
        }
})
 
}




const requestCameraPermission = async () => {
      
}

const MainScreen = ({ navigation }) =>  {
    return (
        <View style>
            <View style={{backgroundColor: '#08027c', height:220,width:'100%',flexDirection:'row'}}>
            <Text style={{fontSize:80,fontWeight:600,color: 'white',marginTop:100,marginLeft:30}}>Alba</Text>
            <View style={{marginLeft:50,marginTop:70,backgroundColor: '#fbb8d0',height:200,width:200,borderRadius:100}}></View>
            </View>
            <View style={{width:'100%',height:60,backgroundColor:'#8b86fd',borderEndEndRadius:12,flexDirection :'row'}}>
                <Text style= {{fontWeight:'600',color: '#08027f',fontSize:35,marginTop:12,marginLeft:12}}>Estado PSD: </Text>
                <Text style= {{color: 'white',fontSize: 40, padding:8,fontWeight:600}}>[{estadoPSD}]</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:50}}>
                <View>
                    <TouchableWithoutFeedback onPress={() => {navigation.navigate("Camara")}}>
                    <View style= {{height:150,width:150,backgroundColor:'#fbb8d0',marginLeft:20}}>
                        <Text style={{color: '#08027f',fontSize:20, marginTop:10,marginLeft:12}}>Ver</Text>
                        <Text style={{fontWeight:500,color: '#08027f',fontSize:25,marginLeft:12}}>Cámara</Text>
                    </View>
                    </TouchableWithoutFeedback >
                    <View style= {{height:50}}></View>
                    <TouchableWithoutFeedback onPress={sendMessage}>
                    <View style= {{height:150,width:150,backgroundColor:'#fbb8d0',marginLeft:20}} >
                        <Text style= {{color: '#08027f',fontSize:20, marginTop:10,marginLeft:12}}>Enviar</Text>
                        <Text style= {{color: '#08027f',fontSize:20,marginLeft:12}} >Mensaje</Text>
                        <Text style= {{fontWeight:500,color: '#08027f',fontSize:25,marginLeft:12}} >de Voz</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress ={() => navigation.navigate('Sensor screen')}>
                    <View style= {{marginLeft: 30,height:350,width:170,backgroundColor:'#08027c'}}>
                        <Text style={{color:'white',fontSize:40,marginTop:100,marginLeft:25}}>Ver detalles</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:60}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Configuracion')}>
                    <View style={{width:'40%',height:50,backgroundColor:'#f21868',borderTopRightRadius:30,borderBottomRightRadius:30}}>
                        <Text style={{color:'white',fontSize:23,marginTop:10,marginLeft:10}}>Configuración</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{width:'100%',height:50,backgroundColor:'#8b86fd'}}></View>

            </View>
        </View>   
    )
}
const Stack = createNativeStackNavigator();
const Main= () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home screen">
                <Stack.Screen name="Home screen" component = {MainScreen} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="Sensor screen" component = {SensorScreen} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="Configuracion" component = {Configuraciones} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="Archivo Medico" component = {ArchivoMedico} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="Alergias" component = {Alergias} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="Camara" component= {Camara} options = {{headerShown: false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
const styles = {
    letra_boton_light : {
        fontSize:20,
    },
    letra_boton_strong: {
        fontSize:20,
        fontWeight: 500,
    }
}

export default Main;
