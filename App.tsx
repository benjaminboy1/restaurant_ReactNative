import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigator from './src/component/BottomNavigator';
import OnboardScreen from './src/component/OnboardScreen';
import COLORS from './src/component/consts/colors';
import DetailsScreen from './src/component/DetailsScreen';
import HeartScreen from './src/component/HeartScreen';
import SearchScreen from './src/component/SearchScreen';





const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor={COLORS.white}/>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
      
        <Stack.Screen name="BoardScreen" component={OnboardScreen}/>
        <Stack.Screen name="HomeScreen" component={BottomNavigator}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
       
        
  
        

      </Stack.Navigator>
    </NavigationContainer>
    
      
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
