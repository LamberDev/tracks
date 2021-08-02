import * as Location from 'expo-location';

// El equivalente a 10 metros en grados
const tenMeetersWithDegrees = 0.0001;

// Funcion en la que retornamos un objeto para crear una localizacion, lo mas importante es como hacemos avanzar esta ubicacion incremmentando
const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            acuracy: 5,
            altitudeAcuray: 5,
            altitude: 5,
            longitude: -122.0312186 + increment * tenMeetersWithDegrees,
            latitude: 37.33233141 + increment * tenMeetersWithDegrees
        }
    };
};

// Llamamos cada segundo a una funcion que hace que se actualize la localizacion psandole un objeto enviando un id y la localizacion
let counter = 0;

sertInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
},1000);