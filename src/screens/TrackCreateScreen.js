import React, { useState, useEffect} from 'react';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync } from 'expo-location';
const TrackCreateScreen = () => {
    const [err, setError] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();

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
