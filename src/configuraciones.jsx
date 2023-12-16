import { View, Text, TextInput,} from "react-native"
import { estilosPantallaSensor } from "./sensorInfo"
import { PSD } from './sensorInfo'

export const Configuraciones = () =>{
    return(
        <View>
            {/**Parte superior de la pantalla */}
            <View>
                <View style={estilosPantallaSensor.bordeNegroSuperior}></View>
                
                <View style= {estilosPantallaSensor.detalles}>
                    <Text style = {estilosPantallaSensor.letrasDetalles}>Editar datos</Text>
                </View>
            
            </View>
            
            {/**Parte de los datos principales: nombre, apellido e imagen */}
            
            <View style={{flexDirection:'row', width:'100%',height:150,backgroundColor:'pink'}}>
                {/**Aca iria la foto del PSD */}
                <View style={{height:120,width:120,backgroundColor:'white',margin:15}}></View>
                {/**Inputs para ingresar la informacion del PSD */}
                <View style={{height:120,marginLeft:0,marginTop:15}}>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={estilosDetalles.letraLabel}>{PSD.nombre}</TextInput>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={estilosDetalles.letraLabel}>{PSD.apellido}</TextInput>
                    </View>
                </View>
            </View>

            {/**Parte de los datos para ingresar el resto de los datos*/}        
            
            <View style={{width:'100%',height:450,backgroundColor:'skyblue'}}>
                <View style={{flexDirection :'row'}}>
                    <Text style={estilosDetalles.letraInput} >Fecha de nacimiento</Text>
                    <TextInput style = {{color: 'white',fontSize:20}}>{PSD.nombre}</TextInput>
                </View>
                <View style={{flexDirection :'row'}}>
                    <Text style={estilosDetalles.letraInput}>Sexo</Text>
                    <TextInput style={{color:'white',fontSize:20}}>{PSD.sexo}</TextInput>
                </View>
                <View style={{flexDirection :'row'}}>
                    <Text style={estilosDetalles.letraInput}>Altura</Text>
                    <TextInput style={{color:'white',fontSize:20}}>{PSD.altura}</TextInput>
                </View>
                <View style={{flexDirection :'row'}}>
                    <Text style={estilosDetalles.letraInput}>Tipo de sangre</Text>
                    <TextInput style={{color:'white',fontSize:20}}>{PSD.tipo_sangre}</TextInput>
                </View>
            </View>


            {/**Parte inferior de la pantalla */}

            <View>
                <View></View>
            </View>

        </View>
        
    )
}

const estilosDetalles = {
    letraInput : {
        color:'#08027c',
        fontSize:25,
        margin:10,
    },
    letraLabel: {
        fontSize:20,
        color:'white'
    }
}