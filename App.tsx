import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './src/component/BottomNavigation';
import OnboardScreen from './src/component/OnboardScreen';
import COLORS from './src/component/consts/colors';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor={COLORS.dark}/>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
      
        <Stack.Screen name="BoardScreen" component={OnboardScreen}/>
        <Stack.Screen name="Home" component={BottomNavigation}/>
       
        
  
        

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
