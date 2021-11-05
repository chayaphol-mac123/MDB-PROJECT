import React, { useEffect } from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';
import ListTrickScreen from './TrickCovidFolder/ListTrickScreen';

import TrickScreen1 from './TrickCovidFolder/TrickScreen/TrickScreen1';
import TrickScreen2 from './TrickCovidFolder/TrickScreen/TrickScreen2';

import PageInfo1 from './covid-vaccine-screen/PageCovid/PageInfo1';
import PageInfo2 from './covid-vaccine-screen/PageCovid/PageInfo2';
import PageInfo3 from './covid-vaccine-screen/PageCovid/PageInfo3';
import PageInfo4 from './covid-vaccine-screen/PageCovid/PageInfo4';
import PageInfo5 from './covid-vaccine-screen/PageCovid/PageInfo5';
import PageInfo6 from './covid-vaccine-screen/PageCovid/PageInfo6';

import Moderna from './covid-vaccine-screen/PageVaccine/Moderna';
import Astra from './covid-vaccine-screen/PageVaccine/Astra';
import Sinopharm from './covid-vaccine-screen/PageVaccine/Sinopharm';
import Pfizer from './covid-vaccine-screen/PageVaccine/Pfizer';
import Sinovac from './covid-vaccine-screen/PageVaccine/Sinovac';
import VdoScreen from './TrickCovidFolder/VdoScreen/VdoScreen1';
import TrickScreen3 from './TrickCovidFolder/TrickScreen/TrickScreen3';
import PhoneNumberCovid from './TrickCovidFolder/TrickScreen/PhoneNumberCovid';


const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>

        {/* Mac Screen */}

        <AppStack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{header: ()=> null}}
        />
        <AppStack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
          },
        }}
        />
        <AppStack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{header: ()=> null}}
        />

        <AppStack.Screen
          name="ListTrickScreen"
          component={ListTrickScreen}
          options={{
            title: 'Trick Covid For Everyone',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'deepskyblue',
              shadowColor: 'black',
              elevation: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 21,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
        />

        <AppStack.Screen
          name="PhoneNumberCovid"
          component={PhoneNumberCovid}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="TrickScreen1"
          component={TrickScreen1}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="TrickScreen2"
          component={TrickScreen2}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="TrickScreen3"
          component={TrickScreen3}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="VdoScreen"
          component={VdoScreen}
          options={{
            title: 'VDO Trick Covid',
            headerStyle: {
              backgroundColor: 'dodgerblue',
              shadowColor: 'black',
              elevation: 0,
              
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
        />

        {/* Dollar Screen */}

        <AppStack.Screen
          name="PageInfo1"
          component={PageInfo1}
        />

        <AppStack.Screen
          name="PageInfo2"
          component={PageInfo2}
        />  

        <AppStack.Screen
          name="PageInfo3"
          component={PageInfo3}
        /> 

        <AppStack.Screen
          name="PageInfo4"
          component={PageInfo4}
        /> 
        
        <AppStack.Screen
          name="PageInfo5"
          component={PageInfo5}
        /> 

        <AppStack.Screen
          name="PageInfo6"
          component={PageInfo6}
        />  



        {/* Best Screen */}

        <AppStack.Screen
          name="Moderna"
          component={Moderna}
        />

        <AppStack.Screen
          name="Astra"
          component={Astra}
        />

        <AppStack.Screen
          name="Sinopharm"
          component={Sinopharm}
        />

        <AppStack.Screen
          name="Pfizer"
          component={Pfizer}
        />

        <AppStack.Screen
          name="Sinovac"
          component={Sinovac}
        />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App;