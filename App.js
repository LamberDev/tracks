import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AcountScreen from './src/screens/AcountScreen';
import TrackListScreen from './src/screens/TracklistScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import { Provider as AuthProvider } from './src/Context/AuthContext';

// Navegacion principal -- SwitchNavigation hace una nevgacion instantanea sin animacion
const switchNavigator = createSwitchNavigator({

    // Navegacion de login signin
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    },
        { headerMode: "none"} // Ocultando los headers para todas las pantallas del loginFlow
    ),

    // Navegación una vez ya esta logeado el user entre Lista de tracks, crear un track y opciones de cuenta
    mainFlow: createBottomTabNavigator({
        
        // Navegación de lista de tracks a vista detalle del track
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
        }),

        TrackCreate: TrackCreateScreen,
        Account: AcountScreen
    })

});

 const App =  createAppContainer(switchNavigator);

 export default () => {
     return <AuthProvider>
                <App></App>
            </AuthProvider>
 }