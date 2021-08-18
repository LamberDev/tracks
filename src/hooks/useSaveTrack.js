import { useContext } from "react";
import { Context as TrackContext } from '../Context/TrackContext';
import { Context as LocationContext } from '../Context/LocationContext';

/**
 * Este hook lo utilizamos como ejemplo de como puedo pasarme info entre Contextos realmente lo que hace este hook se puede hacer de otras maneras
 * 
 * Basicamente cogemos la funcion de crear un trck de TrackContext
 * y lo que necesitamos para crear u track (el nombre del track y las localizaciones) lo cogemos de Location context
 * 
 * Dentro del hook nos creamos una funcion que llame a la funcion de crear el track con los parametros que obtenemos de Location Conext
 * 
 * Nos devolvemos la funcion que hemos creado
 * 
 * Ahora podemos guardar un track desde cualquier componenete con este HOOK
 */
export default () => {
    
    const { createTrack } = useContext(TrackContext);
    const { state: { name, locations } } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations)
    };

    return [saveTrack];

}