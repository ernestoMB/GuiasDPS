
import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text,View, Image, StyleSheet} from 'react-native';
import { Card } from '@rneui/base';



const App = () =>{
  return(
    <ScrollView>
      <Text style={styles.head}>Estas son las comidas típicas de El Salvador</Text>
      <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
        <View style={{flexDirection:'row'}}>
        <Image source={require('./img/pupusas.jpg')} style={styles.img}/>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.tittle}>Pupusas</Text>
        <Text style={styles.txt}>Comida típica Salvadoreña</Text></View>
        </View>
        
      </Card>
      <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
        <View style={{flexDirection:'row'}}>
        <Image source={require('./img/tamales.jpg')} style={styles.img}/>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.tittle}>Tamales</Text>
        <Text style={styles.txt}>Comida típica Salvadoreña</Text></View>
        </View>
        
      </Card>
      <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
        <View style={{flexDirection:'row'}}>
        <Image source={require('./img/campero.png')} style={styles.img}/>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.tittle}>Pollo Campero</Text>
        <Text style={styles.txt}>Comida típica Salvadoreña</Text></View>
        </View>
        
      </Card>
      <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
        <View style={{flexDirection:'row'}}>
        <Image source={require('./img/pupusas.jpg')} style={styles.img}/>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.tittle}>Pupusas</Text>
        <Text style={styles.txt}>Comida típica Salvadoreña</Text></View>
        </View>
        
      </Card>
      <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
        <View style={{flexDirection:'row'}}>
        <Image source={require('./img/tamales.jpg')} style={styles.img}/>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.tittle}>Tamales</Text>
        <Text style={styles.txt}>Comida típica Salvadoreña</Text></View>
        </View>
        
      </Card>
      <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
        <View style={{flexDirection:'row'}}>
        <Image source={require('./img/campero.png')} style={styles.img}/>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.tittle}>Pollo Campero</Text>
        <Text style={styles.txt}>Comida típica Salvadoreña</Text></View>
        </View>
        
      </Card>
    </ScrollView>
  )
}


  



const styles = StyleSheet.create({
  img: {
   width:125,
   height:100,
   borderRadius:100,
   marginRight:15
  },
  txt:{
    textAlign:'left',
    color:'white',
  },
  tittle:{
    fontSize:20,
    color:'white',
    padding:10
  },
  head:{
    color:'black',
    textAlign:'center',
    padding:10,
    fontSize:23
  }
});

export default App;
