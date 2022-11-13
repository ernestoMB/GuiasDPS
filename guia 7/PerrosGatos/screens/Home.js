import React from 'react';
import {View,Text, Button, ScrollView,Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from '@rneui/base';





export default function Home(props){
    const {navigation} = props;
    return(
       <>
         <ScrollView style={{padding:10}}>
         
            <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
                <View style={{flexDirection:'row'}}>
                <Image source={require('../img/dog1.jpg')} style={styles.img}/>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.tittle}>Perro 1</Text>
                <Text style={styles.txt}>Perrito Perrito</Text></View>
                </View>
                
            </Card>
            <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
                <View style={{flexDirection:'row'}}>
                <Image source={require('../img/dog2.png')} style={styles.img}/>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.tittle}>Perro 2</Text>
                <Text style={styles.txt}>Perrito Perrito</Text></View>
                </View>
                
            </Card>
            <Card containerStyle={{backgroundColor:'#1F2024', borderRadius:10}} >
                <View style={{flexDirection:'row'}}>
                <Image source={require('../img/dog3.jpg')} style={styles.img}/>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.tittle}>Perro 3</Text>
                <Text style={styles.txt}>Perrito Perrito</Text></View>
                </View>
                
            </Card>
            
                    
        </ScrollView>
       </>
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