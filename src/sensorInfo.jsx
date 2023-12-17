import {React, useState,useEffect} from "react";
import { Image,View , Text, Touchable, TouchableWithoutFeedback} from "react-native";
import Constants from 'expo-constants'

export const PSD = {
    nombre : 'Tomas',
    apellido: 'Silva',
    edad : 35,
    fecha_nac : '20/1/84',
    sexo : 'Masculino',
    altura : 173,
    peso : 56,
    tipo_sangre : 'A Rh +'
}
let medicionSensores  = {
    sensorTemperatura : 36,
    sensorBPM : 90
}
let umbralTemperatura = {
    limiteSup : 36.7,
    limiteInf : 35.8
}
let umbralCardiaco = {
    limiteSup : 120,
    limiteInf : 80
}

export const SensorScreen = ({ navigation}) => {
    return(
        <View>
            <View style={[estilosPantallaSensor.bordeNegroSuperior,{height:50}]}>
                <TouchableWithoutFeedback onPress={() => {navigation.navigate('Home screen')}}>
                    <Text style={{color:'white', fontSize:30,fontWeight:600,margin:5}}>Volver</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style= {estilosPantallaSensor.detalles}>
                <Text style = {estilosPantallaSensor.letrasDetalles}>Detalles</Text>
            </View>

            <View style = {estilosPantallaSensor.contenedorDetalles}>
                <View style= {estilosPantallaSensor.leftPanel}>
                    <View style={estilosPantallaSensor.imgPSD}>
                        <Image style={{width:140,height:140}}source={require('./pablo.jpeg')}/>
                    </View>

                    <View style= {{marginLeft:15,marginBottom: 20}}>
                        <Text style={estilosPantallaSensor.nombrePSD}>{PSD.nombre}</Text>
                        <Text style={estilosPantallaSensor.nombrePSD}>{PSD.apellido}</Text>
                    </View>
                    
                    <View style={{marginBottom:12}}>
                        <Text style = {{marginLeft:15,fontSize:20}}>Edad</Text>
                        <Text style = {{marginLeft:15,fontSize:20}}>{PSD.edad} años</Text>
                    </View>

                    <View style={{marginBottom:12}}>
                        <Text style = {{marginLeft:15,fontSize:16,}}>Fecha de nacimiento</Text>
                        <Text style = {{marginLeft:15,fontSize:20}}>{PSD.fecha_nac}</Text>
                    </View>
                    
                    <View>
                        <Text style = {{marginLeft:15,fontSize:16}}>Sexo</Text>
                        <Text style = {{marginLeft:15,fontSize:20}}>{PSD.sexo}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:15,marginLeft:7}}>
                        <View >
                            <Text>Altura</Text>
                            <Text>{PSD.altura} m</Text>
                        </View>
                        
                        <View style={estilosPantallaSensor.marginLeft}>
                            <Text>Peso</Text>
                            <Text>{PSD.peso}</Text>
                        </View>
                        
                        <View style={estilosPantallaSensor.marginLeft}>
                            <Text>Tipo de sangre</Text>
                            <Text>{PSD.tipo_sangre}</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10,marginTop:20}}>
                        <TouchableWithoutFeedback onPress={() => {navigation.navigate('Alergias')}}>
                        <View style={estilosPantallaSensor.infoAlergias}><Text style={{color:'white',fontSize:20,marginTop:10,marginLeft:2}}>Alergias y dietas</Text></View>
                        </TouchableWithoutFeedback>
                        <View style={{margin:10}}></View>
                        <TouchableWithoutFeedback onPress={() => {navigation.navigate('Archivo Medico')}}>
                        <View style={estilosPantallaSensor.infoArchivoMedico}><Text style={{color:'white',fontSize:20,margin:10}}>Archivo medico</Text></View>
                        </TouchableWithoutFeedback>
                    </View>



                </View>
                <View style={estilosPantallaSensor.rightPanel}>
                    <Text style={estilosPantallaSensor.infoSensores}>Informacion</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={estilosPantallaSensor.infoSensores}>de los </Text><Text style={estilosPantallaSensor.boldInfoSensores}>sensores</Text>
                    </View>

                    <View style={{marginTop:30}}>
                        <View style={estilosPantallaSensor.detalleSensorCardiaco}>
                            <Text style={estilosPantallaSensor.datoCardiaco}>BPM</Text>
                            <Text style={estilosPantallaSensor.bpm}>{medicionSensores.sensorBPM}</Text>
                            <Text style={estilosPantallaSensor.marginLeft}>Umbral: [{umbralCardiaco.limiteInf} - {umbralCardiaco.limiteSup}]</Text>
                        </View>
                        <View style={{marginTop:20}}></View>
                        <View style={estilosPantallaSensor.detalleSensorTemperatura}>
                            
                        <Text style={estilosPantallaSensor.datoCardiaco}>Temperatura</Text>
                        <Text style={estilosPantallaSensor.bpm}>{medicionSensores.sensorTemperatura}</Text>
                        <Text style={estilosPantallaSensor.marginLeft}>Umbral: [{umbralTemperatura.limiteInf} - {umbralTemperatura.limiteSup}]</Text>
                        </View>
                        <View style={{marginTop:20}}></View>
                        <View style={estilosPantallaSensor.alertaEmergencias}>
                            <Text style={{color:'white',fontWeight:700,fontSize:30,marginLeft:8,marginTop:20}}>Alerta emergencias</Text>
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={{width:'100%',height:100,backgroundColor:'#f21868',marginTop:30}}>
                    <Text style={{fontWeight:500,color:'white',fontSize:35,marginTop:10,marginLeft:10}}>Configuración</Text>
                </View>
            </View>
    )
}


const colores = {
    azul : '#08027c',
    violeta : '#8b86fd',
    violetaClarito : '#dadaf6',
    /**f21868
    f87ca9
    fbb8d0
    f4f4fd'
*/
}


export const estilosPantallaSensor = {
    bordeNegroSuperior:{
        width:'%100',
        height:40,
        backgroundColor:'black'
    },
    detalles : {
        height : '%14',
        width : '%100',
        backgroundColor: colores.azul,
    },
    letrasDetalles : {
        fontSize : 60,
        color: 'white',
        marginLeft : 20
    },
    contenedorDetalles : {
        flexDirection : 'row'
    },
    leftPanel: {
        backgroundColor: colores.violetaClarito,
        width: 170,
        height:600,
    },
    rightPanel:{
        marginTop:10,
        marginLeft:10
    },
    imgPSD:  {
        height: 140,
        width: 140,
        backgroundColor: 'white',
        marginTop : 20,
        marginLeft :14
    },
    nombrePSD:{
        fontSize : 30
    },
    marginLeft:{
        marginLeft:5
    },
    infoAlergias:{
        width:150,
        height:50,
        backgroundColor:'violet',
        
    },
    infoArchivoMedico: {
        width:150,
        height:50,
        backgroundColor:'violet'
    },
    infoSensores :{
        fontSize:25,
        
    },
    boldInfoSensores:{
        fontSize:25,
        fontWeight:700,
        
    },
    detalleSensorCardiaco:{
        backgroundColor:'pink',
        height:150,
        width:195
    },
    detalleSensorTemperatura:{
        backgroundColor:'pink',
        height:150,
        width:195
    },
    alertaEmergencias:{
        backgroundColor:'red',
        height:160,
        width:195
    },
    datoCardiaco:{
        fontSize:30,
        fontWeight:700,
        color:'black',
        marginLeft:10,
        marginTop:5,
    },
    bpm:{
        fontSize:60,
        fontWeight:800,
        marginLeft:100
    }

}

