import React from 'react';
import {View,Text,Image,StyleSheet, ScrollView} from 'react-native';
import {Card} from '@rneui/themed'

export default function About(){
    return(
    <>
           <ScrollView style={{padding:10}}>
         
         <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
             <View style={{flexDirection:'row'}}>
             <Image source={require('../img/cat1.png')} style={styles.img}/>
             <View style={{flexDirection:'column'}}>
             <Text style={styles.tittle}>Gato 1</Text>
             <Text style={styles.txt}>Gatito Gatito</Text></View>
             </View>
             
         </Card>
         <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
             <View style={{flexDirection:'row'}}>
             <Image source={require('../img/cat2.png')} style={styles.img}/>
             <View style={{flexDirection:'column'}}>
             <Text style={styles.tittle}>Gato 2</Text>
             <Text style={styles.txt}>Gatito Gatito</Text></View>
             </View>
             
         </Card>
         <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
             <View style={{flexDirection:'row'}}>
             <Image source={require('../img/cat3.jpg')} style={styles.img}/>
             <View style={{flexDirection:'column'}}>
             <Text style={styles.tittle}>Gato 3</Text>
             <Text style={styles.txt}>Gatito Gatito</Text></View>
             </View>
             
         </Card>
    
                 
     </ScrollView>
    </>
 );
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