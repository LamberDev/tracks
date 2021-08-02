import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../Context/LocationContext';
//import '../helpers/_mockLocation';

const TrackCreateScreen = () => {
    const [err, setError] = useState(null);

    const {addLocation} = useContext(LocationContext);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => { // Esta funcion se llama cada vez que se recibe una localizacion
                addLocation(location); //Cambio el estado
            });

            if(!granted) {
                setError('Permission Location rejected');
            }
        }catch (err){
            setError('error');
        }
    };

    useEffect( () => {
        startWatching();
    },[]);

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

export default TrackCreateScreen;
