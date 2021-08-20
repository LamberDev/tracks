import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as TrackContext } from '../Context/TrackContext';
import  MapView, { Polyline } from 'react-native-maps';
import TrackListScreen from './TracklistScreen';

const TrackDetailScreen = ({ navigation }) => {

    const { state } = useContext(TrackContext);

    const _id = navigation.getParam('_id');

    const track = state.find( t => t._id === _id );

    const initialCoords = track.locations[0].coords;

    return (
        <View>
            <Text style={ { fontSize: 45 } }>{ track.name }</Text>
            <MapView style={ styles.map } initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                longitude: initialCoords.longitude,
                latitude: initialCoords.latitude
            }}>
                <Polyline coordinates={ track.locations.map(loc => loc.coords ) }/>
            </MapView>

        </View>
    );
}


const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;
