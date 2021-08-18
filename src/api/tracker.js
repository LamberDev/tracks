import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance =  axios.create({
    baseURL: 'http://363b96d9f83e.ngrok.io'
});

//Preconfiguramos nuestra instancia de axios para que si hay token lo añada automaticamente
/**
 * La funcion use recibe como parametros dos funciones 
 *  La primera se llama antes de hacer una peticion
 *  La segunda se llama cuando ocurre algun error
 * Dentro de la primera recuperamos el token y lo metemos en los headers si lo tenemos y retornamos el objeto a nuestra peticion
 * En la segunda tratamos los errores
 */
instance.interceptors.request.use(
   async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;