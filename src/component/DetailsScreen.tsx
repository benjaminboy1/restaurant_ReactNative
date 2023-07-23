import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import foods from './consts/foods'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './consts/colors'
import { FontAwesome } from '@expo/vector-icons';
import {SecondaryButton} from '../component/consts/Button';
import HomeScreen from './HomeScreen'

const DetailsScreen = ({navigation, route}) => {
  const item= route.params;
  

  return (
    <SafeAreaView style={{backgroundColor:COLORS.white}}>
      <View style={styles.header}>
      <FontAwesome name="arrow-left" size={20} color="black" onPress={navigation.goBack}/>
      <Text style={{fontSize:20, left:10, fontWeight:'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems:'center', height:300,}}>
          <Image source={item.image} style={{width:180, height:180,}}/>
        </View>
        <View style={styles.details}>
          <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:28, fontWeight:'bold', color:COLORS.white, left:8}}>
              {item.name}
            </Text>
            <View style={styles.favoris}>
            <FontAwesome name="heart-o" size={25} color={COLORS.primary} />
            </View>
          </View>
          <Text style={styles.detailsText}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore rerum velit mollitia beatae earum ipsam facere
             incidunt dolorum quidem minus, ut natus dolor corrupti ea,
              ab est dolore sequi adipisci?
          </Text>
          <View style={{marginTop:70, marginBottom:70}}>
          <SecondaryButton title='Add to Card'/>
        </View>
        </View>
        

      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  header:{
    paddingVertical: 20,
    flexDirection:'row',
    alignItems:'center', 
  },
  details:{
    paddingTop:40,
    paddingBottom:60,
    backgroundColor:COLORS.primary,
    borderTopEndRadius:40,
    borderTopStartRadius:40,
  }, 
  favoris:{
    width:50,
    height:50,
    backgroundColor:COLORS.white,
    right:10,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center'
  },
  detailsText:{
    textAlign:'center',
    color:COLORS.white,
    marginTop:20,
    lineHeight:22,
    fontSize:15,
  }
})
export default DetailsScreen