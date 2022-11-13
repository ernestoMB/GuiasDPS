import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from '../screens/Home';
import AboutStack from '../screens/About';
import ContactStack from '../screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function Navigation(){
 return(
 <Tab.Navigator>
 <Tab.Screen name="home" component={HomeStack} options={{title:'Perros'} } />
 <Tab.Screen name="about" component={AboutStack} options={{title:'Gatos'}}/>
 
 </Tab.Navigator>
 );
}


