import { useState, useEffect } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";

export default ( shouldTrackLocation,callback ) => {

    const [err, setError] = useState(null); 

    const [susbscriber, setSub] = useState(null); // Variable de estado para trackear o no la localizacion

    const startWatching = async ()  => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            const sub = await watchPositionAsync({ //gUARDO MI PROMESA en na variable
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback // Funcion que pasamos desde el componente, el segundo valor de watchPosition es que nos devuelve location 
            // Al pasarle nosotros una funcion como callback nuestra fucnion recoge ese location y hace lo que sea
            );

            setSub(sub); //Actualizo mi estado con la respuesta de mi promesa

            if(!granted) {
                setError('Permission Location rejected');
            }
        }catch (err){
            setError('error');
        }
    };

    useEffect( () => {
        if (shouldTrackLocation) { // Si puedo trackear
            startWatching(); // trackeo
        } else { // Si no puedo trackear
            susbscriber.remove() //Borro el subscriber
            setSub(null); // Y le devuelvo su estado por defecto
        }
        
    },[shouldTrackLocation, callback]); //Llamo a useEfect al inicio y reacciono al argumento que indica si trackeo o no

    return [err];
}