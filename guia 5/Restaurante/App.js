import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform, Image } from 'react-native';
import Cita from './cita';
import Formulario from './formulario';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import Colors from './utils/colors';


const App = () => {
 // definir el state de citas
  const [citas, setCitas] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);
  useEffect(() => {
    const obtenerCitasStorage = async () => {
      try {
        const citasStorage = await AsyncStorage.getItem('citas');
        if(citasStorage) {
        setCitas(JSON.parse(citasStorage))
        }
      } catch (error) {
        console.log(error);
      }
    }
    obtenerCitasStorage();
  }, []);
  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    const citasFiltradas = citas.filter( cita => cita.id !== id );
    setCitas( citasFiltradas );
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  }
  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  }
  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }
 // Almacenar las citas en storage
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas', citasJSON);
    } catch (error) {
      console.log(error);
    }
  }
 return (
 <TouchableWithoutFeedback onPress={() => cerrarTeclado() }>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Restaurante TukiTuki</Text>
      <Image  style={{alignSelf:'center', borderRadius:100, width:150,height:150} } source={require('./img/tuki.jpg')}></Image>
      <View>
        <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}> {mostrarform ? 'Cancelar CrearCita' : 'Crear Nueva Reserva'} </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.contenido}>
          { mostrarform ? (
          <>
          <Text style={styles.titulo}>Reservar</Text>
          <Formulario
          citas={citas}
          setCitas={setCitas}
          guardarMostrarForm={guardarMostrarForm}
          guardarCitasStorage={guardarCitasStorage}
          />
          </>
          ) : (
          <>
          <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay Reservas, agrega una'} </Text>
          <FlatList
          style={styles.listado}
          data={citas}
          renderItem={ ({item}) => <Cita item={item}
          eliminarPaciente={eliminarPaciente} /> }
          keyExtractor={ cita => cita.id}
          />
          </>
          ) }
      </View>
    </View>
 </TouchableWithoutFeedback>
 );
};
const styles = StyleSheet.create({
  contenedor: {
  backgroundColor: Colors.PRIMARY_COLOR,
  flex: 1
  },
  titulo: {
  color: 'white',
  marginTop: Platform.OS === 'ios' ? 40 : 20 ,
  marginBottom: 20,
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center'
  },
  img:{
    textAlign:'center',
  },  
 
  contenido: {
  flex: 1,
  marginHorizontal: '2.5%',
  },
  listado: {
  flex: 1,
  },
  btnMostrarForm: {
  padding: 10,
  backgroundColor:Colors.BUTTON_COLOR,
  marginVertical: 10
  },
  textoMostrarForm: {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center'
  }
});
export default App;
