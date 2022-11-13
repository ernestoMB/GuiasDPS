import React from 'react';
import {Text, StyleSheet, TouchableHighlight, View } from 'react-native';


const Cita = ({item, eliminarPaciente}) =>
{
    const dialogoEliminar= id => {
        console.log('eliminando...', id);
        eliminarPaciente(id);
    }

    return(
        <View style={StyleSheet.cita}>
            <View>
                <Text style={styles.label}>Nombre: </Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Cantidad de personas: </Text>
                <Text style={styles.texto}>{item.telefono}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sección: </Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>
            <View>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.texto}>{item.fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora: </Text>
                <Text style={styles.texto}>{item.hora}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={()=> dialogoEliminar(item.id)}
                style={styles.btnEliminar}>
                <Text style={styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
            
        </View>
        
        
    )
}
const styles = StyleSheet.create({
    cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    color:'white'
    },
    label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    color:'white'
    },
    texto: {
    fontSize: 18,
    color:'white'
    },
    btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
    },
    textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
    }
})
export default Cita;
   