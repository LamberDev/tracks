import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline }from 'react-native-maps';
const Map = () => {
    return (
        //Map View es nustro contenedor donde mostramos nuestro mapa, initialRegion recibe un objeto con ciertos parametros para mostrar 
        // Una localizacion al inicio
        <MapView 
            style={ styles.map }
            initialRegion={ {
                latitude:37.33233,
                longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }} 
        >
                {/* PolyLine recibe unas coordenadas en forma de array de objetos  u ojetos y las dibuja */}
                <Polyline></Polyline>
                
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;