import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle }from 'react-native-maps';
import { Context as LocationContext } from '../Context/LocationContext';

const Map = () => {

    const { state: { currentLocation, locations } } = useContext(LocationContext);
    

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }}></ActivityIndicator>;
    }

    return (
        //Map View es nustro contenedor donde mostramos nuestro mapa, initialRegion recibe un objeto con ciertos parametros para mostrar 
        // Una localizacion al inicio
        <MapView 
            style={ styles.map }
            initialRegion={ {
                longitude: currentLocation.coords.longitude,
                latitude: currentLocation.coords.latitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}

            //Prop para que el mapa se vaya moviendo en base al objeto que le pasamos
            region={ {
                longitude: currentLocation.coords.longitude,
                latitude: currentLocation.coords.latitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            
        >       
                {/* Elemento para dibujar ese circulo que indica nuestra posicion y cambia de posicion en base al vaor de center */}
                <Circle
                    center={currentLocation.coords} //Donde lo vamos a ubicar el circulo en nuestras coordenadas
                    radius={30} //tamaño del radio
                    strokeColor="rgba(158, 158, 255, 1.0)" //Color del borde y opacidad
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
                {/* PolyLine recibe unas coordenadas en forma de array de objetos  u ojetos y las dibuja 
                    Mapeamos el array que contiene nuestras localizaziones dentro de la prop coordinates*/}
                <Polyline coordinates={ locations.map(location => location.coords)}></Polyline> 
                
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;