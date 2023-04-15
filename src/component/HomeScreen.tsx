import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import COLORS from './consts/colors'
import Categories from './consts/Categories';
import foods from './consts/foods';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 20;




const Home = () => {


const [selectedCategoryIndex, setSelectedCategoryInedx] = React.useState(0);

const ListCategories = () =>{
  return(
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
  return <View style={styles.card}>
    <View style={{alignItems:'center', top:-10}}>
      <Image source={food.image} style={{width:120, height:120, }}/>
    </View>
  </View>;
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
    <View style={{marginTop:40, flexDirection:'row', paddingHorizontal: 20, }}>
      <View style={styles.inputContainer}>
      <FontAwesome name="search" size={28}  color={COLORS.dark}/>
      <TextInput style={{flex:1, fontSize:18, left:10,}} placeholder={'Search for Food'}/>
      </View>
      <View style={styles.sortBtn}>
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
    marginTop: 20,
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
  }

})

export default Home