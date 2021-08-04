import React, {useContext, useCallback} from 'react';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../Context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
//import '../helpers/_mockLocation';

const TrackCreateScreen = ( { isFocused} ) => { // Recibo la prop de WithNavigationFocus
    
    const {state, addLocation} = useContext(LocationContext);

    /** Con useCallbacl le pasamos como argumento una funcion y un array con propiedades
     * Este useCallback se ejecuta cada vez que cambie el valor que le pasamos en el array, si ese valor cambia ejecuta la funcion
     * Si ese valor no cambia no modifica esa funcion y la ejecuta con su estado por defecto∫
     */
    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording])

    const [err] = useLocation(isFocused, callback); 

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={ { fontSize: 45 } }>TrackCreateScreen</Text>
            <Map></Map>
            { err ? <Text>Location permission denied</Text> : null}
            <TrackForm></TrackForm>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen); //Envolvemos este componeete con dicha funcion para poder obtener a tiempo real si este componente
//esta siendo FOCUS es decir se esta mostrando en la pantalla o no
