import  React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import {Picker} from '@react-native-community/picker';


const Formulario = ({busqueda, guardarBusqueda}) =>{
    const {pais} = busqueda;

    const [animacionboton] = useState(new Animated.Value(1));

    const animacionEntrada = () =>{
        Animated.spring(animacionboton,{toValue:.9}).start();
    }
    const animacionSalida = () =>{
        Animated.spring(animacionboton,{toValue:1}).start();
    }
    const estiloAnimacion={
        transform:[{
            scale:animacionboton
        }]
    }


    const consultarPais=()=>{
        if(pais.trim()===''){
            mostrarAlerta();
            return;
        }
        else{
             ///API
        guardarconsultar1(true);
        }
    }
    mostrarAlerta=()=>
    {
        Alert.alert("Error", "Debe seleccionar un país"), [{Text:'Entendido'}]
    }

    return(
        <>
            <View style={styles.fondo}>
                <View  style={styles.fondo}>
                    <Text style={styles.input}>Pais</Text>
                </View>
                <Picker selectedValue={pais} onValueChange={pais=>guardarBusqueda({...busqueda,pais})} onPress={()=>consultarPais()} style={styles.itempais}>
                    <Picker.Item label="--seleccione un pais--" value=""/>
                    <Picker.Item label="Canada" value="ca" />
                    <Picker.Item label="El Salvador" value="sv"/>
                    <Picker.Item label="Guatemala" value="gt"/>
                    <Picker.Item label="Honduras" value="hn"/>
                    <Picker.Item label="Nicaragua" value="ni"/>
                    <Picker.Item label="Panama" value="pa"/>
                    <Picker.Item label="Costa Rica" value="cr"/>
                    <Picker.Item label="Mexico" value="mx"/>
                    <Picker.Item label="Argentina" value="ar"/>
                    <Picker.Item label="Estados Unidos" value="us"/>
                    <Picker.Item label="Colombia" value="co"/>
                    <Picker.Item label="España" value="es"/>
                    <Picker.Item label="Peru" value="pe"/>
                </Picker>
            </View>
            <TouchableWithoutFeedback onPressIn={()=>animacionEntrada()} onPressOut={()=>animacionSalida()}>
                <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                    <Text style={styles.textoBuscar}>Buscar País</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles= StyleSheet.create({
    input:{padding:10,
    height:50,
    fontSize:20,
    marginBottom:20,
    textAlign:'center',
    color :'#000'
    },
    itempais:{
    height:60,
    backgroundColor:'#fff',
    },
    btnBuscar:{
    marginTop:50,
    height:50,
    backgroundColor:'#000',
    fontSize:20,
    marginBottom:20,
    textAlign:'center'
    },
    textoBuscar:{
    color:'#fff',
    fontWeight:'bold',
    textTransform:'uppercase',
    textAlign:"center",
    fontSize:18
    },
    fondo:{
        backgroundColor:'lightblue'
    }
})
export default Formulario;
