import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import COLORS from './consts/colors';
import { PrimaryButton } from './consts/Button';


const OnboardScreen = ({navigation}) => {
  return (

    <SafeAreaView style={{flex: 1,}}>

    <View style={{height:400}}>
    <Image style={{height:'50%', width:200, borderRadius:100, top:130, alignSelf:'center'}}
     source={require("../images/burgerfont.jpeg")}
     />
     
    </View>
   <View style={styles.textcontainer}>
   <View>
    <Text style={{top:9, textAlign:'center', fontSize:32, fontWeight:'bold' }}>Welcome to my Resto</Text>
    <Text style={{marginTop:20, fontSize:18, textAlign:'center', color: COLORS.grey,}}>We're here to help you to find a delicious food</Text>
    </View>
    <View style={styles.indicatorContainer}>
      <View style={styles.currentIndicator}/>
      <View style={styles.indicator}/>
      <View style={styles.indicator}/>
    </View>
    
    <PrimaryButton  onPress={() => navigation.navigate('HomeScreen')} title="Get Started" />
   </View>
    </SafeAreaView>
    
    
  )
}

export default OnboardScreen;

const styles = StyleSheet.create({
  textcontainer:{
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer:{
    height:50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator:{
    height:12,
    width:30,
    borderRadius:10,
    backgroundColor:COLORS.primary,
    marginHorizontal: 5,
  },
  indicator:{
    height:12,
    width:12,
    borderRadius:6,
    backgroundColor:COLORS.grey,
    marginHorizontal: 5,
  }
})