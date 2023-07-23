import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import COLORS from './consts/colors';
import HomeScreen from './HomeScreen';
import foods from './consts/foods';
import { PrimaryButton } from './consts/Button';

const CardScreen = ({navigation}) => {

  const CartCard = ({item}) => {
    return (
    <View style={styles.cardtCard}>
      <Image source={item.image} style={{height: 80, width: 80,}}/>
      <View style={{height: 100, marginLeft: 10, paddingVertical: 20, flex: 1,}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{item.name}</Text>
      <Text style={{fontSize:13, color:COLORS.grey}}>{item.ingredients}</Text>
      <Text style={{fontSize:17, fontWeight:'bold',}}>${item.price}</Text>
      </View>
      <View style={{marginRight:20, alignItems: 'center'}}>
        <Text style={{fontWeight:'bold', fontSize:18}}>3</Text>
        <View style={styles.actionBtn}>
        <AntDesign name="minus" size={20} color={COLORS.white} />
        <AntDesign name="plus" size={20} color={COLORS.white} />
        </View>
      </View>
    </View>
    );
  };


  return (
    <SafeAreaView  style={{backgroundColor:COLORS.white, flex: 1}}>
       <View style={styles.header}>
       <FontAwesome name="arrow-left" size={20} color="black" onPress={navigation.goBack}/>
      <Text style={{fontSize:20, left:10, fontWeight:'bold'}}>Details</Text>
    </View>
    <FlatList 
    showsVerticalScrollIndicator={false} 
    contentContainerStyle={{paddingBottom:80}} 
    data={foods}
    renderItem={({item}) => <CartCard item={item}/>}
    ListFooterComponentStyle={{paddingHorizontal:20, marginTop: 20,}}
    ListFooterComponent={() => (
      <View>
      <View style={{marginVertical:20, justifyContent:'space-between', flexDirection:'row'}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Total Price</Text>
        <Text style={{fontSize:18, fontWeight:'bold'}}>$60</Text>
      </View>
      <View style={{marginHorizontal:30}}>
          <PrimaryButton title='CHECKOUT'/>
        </View>
      </View>
    
    
    )}
    />
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  header:{
    top:-15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cardtCard:{
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection:'row',
    alignItems:'center',
  },
  actionBtn:{
    height: 30,
    width:80,
    backgroundColor:COLORS.primary,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection: 'row'
  }
});

export default CardScreen;