import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react'
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import CardScreen from './CardScreen';
import MarketScreen from './MarketScreen';
import SearchScreen from './SearchScreen';
import HeartScreen from './HeartScreen';
import COLORS from './consts/colors';




const Tab = createBottomTabNavigator();


const BottomNavigation = () => {

  
  return (
    <Tab.Navigator 
    screenOptions={{
      headerStyle:{
        height: 40,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor: COLORS.primary,
      
      
    }}>


        <Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="home" size={28} color={color} />),
        }}
         name="home"  component={HomeScreen} />


<Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="shopping-bag" size={28} color={color} />),
        }}
         name="maket"  component={MarketScreen} />

<Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <View style={{
              height:60,
              width:60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderColor: COLORS.primary,
              borderWidth: 2,
              borderRadius:30,
              bottom:24,
              elevation: 8,

            }}>
              <FontAwesome name="search" size={29}  color={COLORS.primary}/>
            </View>
          ),
        }}
         name="search"  component={SearchScreen} />

<Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="heart" size={28} color={color} />),
        }}
         name="heart"  component={HeartScreen} />



<Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="shopping-cart" size={28} color={color} />),
        }}
         name="card"  component={CardScreen} />




    </Tab.Navigator>
    
  )
}

export default BottomNavigation;