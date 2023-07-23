import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './consts/colors';
import { FontAwesome } from '@expo/vector-icons';


const SearchScreen = () => {
  return (
    <SafeAreaView style={{}}>
      <View style={styles.header}>
      <View style={styles.searchBar}>
       <FontAwesome name="search" size={23}  color={COLORS.dark} />
        <TextInput style={styles.searchInput} placeholder={'Search for Foods'}/>
      </View>
      <View style={styles.searchHistory}>
      <FontAwesome name="clock-o" size={23} color={COLORS.white} />
      </View>
      </View>

      <View style={{width:'auto', height:'100%', backgroundColor:COLORS.light}}>
        
      </View>


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{

  },
  header:{
    width: 'auto', 
    height:100,
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    
  },
  searchBar:{
    width: 270,
    height:45,
    left: 25,
    backgroundColor:COLORS.light,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    borderRadius: 10,
    
  },
  searchInput:{
    width: 200,
    height: 300,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    fontSize: 17,
  },
  searchHistory:{
    left:50,
    width: 50,
    height: 45,
    borderRadius: 9,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.primary,
  }
})
export default SearchScreen;