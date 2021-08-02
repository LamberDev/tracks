import React, {useContext} from 'react';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../Context/LocationContext';
import useLocation from '../hooks/useLocation';
//import '../helpers/_mockLocation';

const TrackCreateScreen = ( { isFocused} ) => { // Recibo la prop de WithNavigationFocus
    
    const {addLocation} = useContext(LocationContext);

    const [err] = useLocation(isFocused,addLocation) // Envio si la pantalla esta siendo mostrada y la funcion que añade la localizacion

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={ { fontSize: 45 } }>TrackCreateScreen</Text>
            <Map></Map>
            { err ? <Text>Location permission denied</Text> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen); //Envolvemos este componeete con dicha funcion para poder obtener a tiempo real si este componente
//esta siendo FOCUS es decir se esta mostrando en la pantalla o no
