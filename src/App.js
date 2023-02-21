import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();


// Pages
import Main from './pages/Main/Main';
import Details from './pages/Details/Details';
import Whistle from './pages/Whistle/Whistle';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const EarthquakesStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='MainScreen' component={Main} options={{headerTitle:'Türkiyedeki Depremler',headerTitleAlign:'center',headerTintColor:'white',headerStyle:{backgroundColor:'crimson'}}}/>
        <Stack.Screen name='DetailsScreen' component={Details}/>
      </Stack.Navigator>
    )
  }



  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name='EarthquakesTab' component={EarthquakesStack} options={{
            headerShown:false,
            title:'Depremler',
            tabBarIcon: ({color,size}) => (<Icon name='image-broken-variant' size={size} color={color}/>)
          }}/>
          <Tab.Screen name='WhistleTab' component={Whistle} options={{
            title: 'Düdük',
            headerShown:false,
            tabBarIcon: ({focused,color,size}) => {
              let iconName;
              focused ? iconName = 'whistle' : iconName = 'whistle-outline';
              return (
                <Icon name={iconName} size={size} color={color}/>
              )
            }
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;