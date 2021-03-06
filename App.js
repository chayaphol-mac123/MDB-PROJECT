import React, { useEffect } from 'react';
import { View } from 'react-native';
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
import TrickScreen3 from './TrickCovidFolder/TrickScreen/TrickScreen3';
import TrickScreen4 from './TrickCovidFolder/TrickScreen/TrickScreen4';
import TrickScreen5 from './TrickCovidFolder/TrickScreen/TrickScreen5';
import TrickScreen6 from './TrickCovidFolder/TrickScreen/TrickScreen6';
import TrickScreen7 from './TrickCovidFolder/TrickScreen/TrickScreen7';

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

import PhoneNumberCovid from './TrickCovidFolder/TrickScreen/PhoneNumberCovid';
import ChooseVdoScreen from './TrickCovidFolder/VdoScreen/ChooseVdoScreen';

import VdoHead1 from './TrickCovidFolder/VdoScreen/VdoHead1';
import VdoHead2 from './TrickCovidFolder/VdoScreen/VdoHead2';
import VdoHead3 from './TrickCovidFolder/VdoScreen/VdoHead3';


const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>

        {/* Mac Screen */}

        <AppStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
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
          options={{ header: () => null }}
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
          name="TrickScreen4"
          component={TrickScreen4}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="TrickScreen5"
          component={TrickScreen5}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="TrickScreen6"
          component={TrickScreen6}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="TrickScreen7"
          component={TrickScreen7}
          options={{
            title: '',
          }}
        />

        <AppStack.Screen
          name="ChooseVdoScreen"
          component={ChooseVdoScreen}
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

        <AppStack.Screen
          name="VdoHead1"
          component={VdoHead1}
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

        <AppStack.Screen
          name="VdoHead2"
          component={VdoHead2}
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

        <AppStack.Screen
          name="VdoHead3"
          component={VdoHead3}
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
          options={{
            title: '??????????????? covid-19 ?????????????????????',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'deepskyblue',
              shadowColor: 'black',
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 21,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
        />

        <AppStack.Screen
          name="PageInfo2"
          component={PageInfo2}
          options={{
            title: '?????????????????????????????????????????????????????? Covid-19',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'lightcoral',
              shadowColor: 'black',
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 21,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
        />  

        <AppStack.Screen
          name="PageInfo3"
          component={PageInfo3}
          options={{
            title: '????????????????????????????????????????????????????????? Covid-19',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'indianred',
              shadowColor: 'black',
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 21,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
        /> 

        <AppStack.Screen
          name="PageInfo4"
          component={PageInfo4}
          options={{
            title: 'Covid-19 ?????????????????????????????????????????????????????????',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'wheat',
              shadowColor: 'black',
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 21,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
        /> 
        
        <AppStack.Screen
          name="PageInfo5"
          component={PageInfo5}
          options={{
            title: '???????????????????????????????????????????????? Covid-19',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'mediumpurple',
              shadowColor: 'black',
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 21,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
        /> 

        <AppStack.Screen
          name="PageInfo6"
          component={PageInfo6}
          options={{
            title: '????????????????????????????????????????????? Covid-19',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'mediumseagreen',
              shadowColor: 'black',
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 21,
              color: 'white',
              fontWeight: 'bold',
            }
          }}
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