import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View , Alert} from "react-native";
import Formulario from "./src/Components/Formulario";
import Pais from "./src/Components/pais";

export default function App(){
  const [busqueda, guardarBusqueda] = useState({pais:'',});
  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({}); 

  useEffect(()=>{
    const { pais } = busqueda;
    const consultarPais = async () => {
      if(consultar){
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        try{
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado(resultado);
          guardarconsultar(false);
        } catch(error){
          mostrarAlerta();
        }
      }
    };
    consultarPais();
    },[consultar]);
    const mostrarAlerta = () => {
      Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'),
      [{ Text: 'Ok' }];
    };



  return(
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario busqueda={busqueda} 
        guardarBusqueda={guardarBusqueda}
        guardarconsultar={guardarconsultar}></Formulario>
        <Pais resultado={resultado}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo:{
    backgroundColor:'lightblue'
  },
  app:{
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido: {
    margin: '2.5%',
  },
    
})