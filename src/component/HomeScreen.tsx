import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList, Dimensions, TouchableHighlight, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import COLORS from './consts/colors'
import Categories from './consts/Categories';
import foods from './consts/foods';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DetailsScreen from './DetailsScreen';
import SearchScreen from './SearchScreen';

const {width} = Dimensions.get("screen");
const cardWidth = width/ 2 - 20;


const HomeScreen = ({navigation}) => {


const [selectedCategoryIndex, setSelectedCategoryInedx] = React.useState(0);


const ListCategories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.categoriesListContainer}>
    {Categories.map((categories, index) => (
   
   <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryInedx(index)}>
      <View style={{
        backgroundColor:selectedCategoryIndex == index  
        ? COLORS.primary 
        : COLORS.secondary,
        ...styles.categoryBtn}}>
          <View style={styles.categoryBtnImgCon}>
          <Image source={categories.image} style={{width:35, height:35, borderRadius:15, resizeMode:'cover'}}/>
          </View>
          <Text style={{fontSize:15, fontWeight: 'bold', marginLeft:10, color:selectedCategoryIndex == index ? COLORS.white : COLORS.primary }}>{categories.name}</Text>
      </View>
    </TouchableOpacity>

    ))}
    </ScrollView>
  );
};

const Card = ({food}) => {
  return ( 
  <TouchableHighlight underlayColor={COLORS.white} activeOpacity={0.9} onPress={() =>navigation.navigate('DetailsScreen', food)}>
    <View style={styles.card}>
    <View style={{alignItems:'center', top:-10}}>
      <Image source={food.image} style={{width:120, height:120, borderTopRightRadius:20, borderTopLeftRadius:20,}}/>
    </View>
    <View style={{marginHorizontal:20}}>
      <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:18, color:COLORS.dark}}>{food.name}</Text>
      <Text style={{fontWeight:'bold', marginTop:2, fontSize:14, color:COLORS.grey}}>{food.ingredients}</Text>
    </View>
    <View style={{marginTop:10, marginHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{fontSize:18, fontWeight:'bold'}}>${food.price}</Text>
      <View style={styles.addToCardbtn}>
      <FontAwesome name="plus"  size={20} color={COLORS.white}/>
      </View>
    </View>
  </View>
  </TouchableHighlight>
  
  );
   
 };
 
  return (
    <SafeAreaView>
      <View style={styles.header}>
     <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:28}}>Hi!</Text>
        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>Benm</Text>
      </View>
      <Text style={{fontSize:22, marginTop:5, color: COLORS.grey}}>What do you need today</Text>
      </View>
      <Image style={{width:50, height:50, borderRadius:30}} source={require('../images/chris.jpg')}/>
    </View>
    <View style={{marginTop:30, flexDirection:'row', paddingHorizontal: 20, }} >
      <View style={styles.inputContainer}>
      <FontAwesome name="search" size={28}  color={COLORS.dark} onTouchStart={()=>navigation.navigate('SearchScreen')}/>
      
      <TextInput style={{flex:1, fontSize:18, left:10,}} placeholder={'Search for Food'} onPressIn={()=>navigation.navigate('SearchScreen')} />
      </View>
      <View style={styles.sortBtn} onTouchStart={()=>navigation.navigate('SearchScreen')}>
      <FontAwesome name="clock-o" size={24} color={COLORS.white} />
      </View>
    </View>
    <View>
    <ListCategories/>
    </View>
    <FlatList 
    showsVerticalScrollIndicator={false}
    numColumns={2}
    data={foods}
    renderItem={({item}) => <Card food={item}/>}
    />
    </SafeAreaView>
    
  ) 
}
const styles = StyleSheet.create({
  header:{
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:20,
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderRadius:10,
    backgroundColor: COLORS.light,
    alignItems:'center',
    paddingHorizontal:20,
  },
  sortBtn:{
    width:50,
    height:50,
    backgroundColor: COLORS.primary,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    left:5,
    
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn:{
    height:45,
    width:120,
    marginRight:7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal:5,
    flexDirection:'row',
  },
  categoryBtnImgCon:{
    height:35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
  },
  card:{
   height: 220,
   width: cardWidth,
   marginHorizontal: 10,
   marginBottom: 20,
   marginTop: 50, 
   borderRadius: 15,
   elevation: 13,
   backgroundColor: COLORS.white,
  },
  addToCardbtn:{
    height:25,
    width:25,
    borderRadius:20,
    backgroundColor:COLORS.primary,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    
    
    
  },

})

export default HomeScreen;